from flask import Blueprint, request, jsonify
from app.ai.gemini_client import GeminiClient
import asyncio

questions_bp = Blueprint("questions_bp", __name__)

# Define the diseases we can screen for
SCREENABLE_DISEASES = [
    "Common cold",
    "Flu (Influenza)", 
    "Heartburn",
    "Seasonal allergies",
    "Stomach bug",
    "Sore throat",
    "Minor muscle pain",
    "Mild skin rash"
]

@questions_bp.route('/generate', methods=['POST'])
def generate_question():
    """
    Generate next question dynamically using Gemini based on user's previous answers
    Expected input: {"answers": {"question1": "answer1", "question2": "answer2"}, "body_location": "head"}
    """
    try:
        data = request.json
        user_answers = data.get("answers", {})
        body_location = data.get("body_location", "general")
        
        # Check if we've reached the maximum number of questions (20)
        question_count = len(user_answers)
        if question_count >= 20:
            # Force final diagnosis
            return analyze_symptoms_with_gemini(user_answers)
        
        # First question - what symptoms are you experiencing?
        if not user_answers:
            return jsonify({
                "question": "What symptoms are you experiencing?",
                "question_id": "initial_symptoms",
                "type": "multiple_choice",
                "options": ["Fever and chills", "Headache", "Sore throat", "Stomach pain", "Skin rash", "Chest pain", "Muscle pain", "Other"],
                "is_final": False,
                "question_number": 1,
                "total_questions": 20
            })
        
        # Use Gemini to generate the next question dynamically
        next_question = generate_next_question(user_answers, question_count + 1, body_location)
        
        if next_question.get("is_final"):
            # Time to analyze and provide diagnosis
            diagnosis_result = analyze_symptoms_with_gemini(user_answers)
            # If diagnosis_result is a Flask response, extract the JSON data
            if hasattr(diagnosis_result, 'get_json'):
                diagnosis_data = diagnosis_result.get_json()
            else:
                diagnosis_data = diagnosis_result
            
            # Return combined response with diagnosis
            return jsonify({
                "is_final": True,
                "question_number": question_count + 1,
                "total_questions": 20,
                **diagnosis_data
            })
        else:
            # Add question number and total to the response
            next_question["question_number"] = question_count + 1
            next_question["total_questions"] = 20
            return jsonify(next_question)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def generate_next_question(user_answers, question_number, body_location="general"):
    """
    Use Gemini to generate the next question based on current answers
    """
    client = GeminiClient()
    
    # Use provided body_location or try to infer from symptoms
    if body_location == "general" and "initial_symptoms" in user_answers:
        # Try to infer body location from symptoms
        symptoms = user_answers.get("initial_symptoms", "").lower()
        if "headache" in symptoms:
            body_location = "head"
        elif "throat" in symptoms:
            body_location = "throat"
        elif "stomach" in symptoms:
            body_location = "stomach"
        elif "skin" in symptoms or "rash" in symptoms:
            body_location = "skin"
        elif "chest" in symptoms:
            body_location = "chest"
        elif "muscle" in symptoms:
            body_location = "musculoskeletal"
        else:
            body_location = "general"
    
    # Build context for Gemini
    context = f"""
    You are a medical screening assistant. Your task is to ask ONE follow-up question to help diagnose the user's condition.

    CONTEXT:
    - Body area of concern: {body_location}
    - Screenable conditions: {', '.join(SCREENABLE_DISEASES)}
    - Previous answers: {user_answers}
    - Current question number: {question_number}

    INSTRUCTIONS:
    1. Ask exactly ONE yes/no question
    2. Make the question specific to their reported symptoms and body area
    3. Focus on distinguishing between screenable conditions and serious conditions
    4. Use simple, clear language
    5. Stop asking questions (set is_final=true) when you can confidently:
       - Identify a screenable condition, OR
       - Detect a red flag requiring immediate medical attention
    6. After 5-8 questions, if you have enough information, set is_final=true

    OUTPUT FORMAT:
    Return ONLY a valid JSON object with this exact structure:
    {{
        "question": "Your specific yes/no question here?",
        "question_id": "{question_number}",
        "type": "yes/no",
        "options": ["yes", "no"],
        "is_final": false
    }}

    EXAMPLES:
    - For head pain: "Is the pain worse when you move your head?"
    - For chest pain: "Does the pain get worse when you take a deep breath?"
    - For stomach pain: "Do you have any nausea or vomiting?"
    - For throat pain: "Do you have difficulty swallowing?"
    - For skin issues: "Is the affected area red and swollen?"
    - For muscle pain: "Does the pain get worse with movement?"
    - For fever: "Do you have a runny nose or congestion?"
    - For general flu-like symptoms: "Do you have body aches and fatigue?"

    IMPORTANT: Return ONLY the JSON object, no additional text or explanations.
    """
    
    try:
        # Run async function in sync context
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        response = loop.run_until_complete(client.generate_response(context))
        loop.close()
        
        # Parse the JSON response from Gemini
        import json
        import re
        
        # Extract JSON from response
        json_match = re.search(r'\{.*\}', response, re.DOTALL)
        if json_match:
            question_data = json.loads(json_match.group())
            # Ensure is_final is boolean
            question_data["is_final"] = bool(question_data.get("is_final", False))
            return question_data
        else:
            # Fallback if Gemini doesn't return proper JSON
            return {
                "question": "How severe is your pain on a scale of 1-10?",
                "question_id": str(question_number),
                "type": "multiple_choice",
                "options": ["1-3 (Mild)", "4-6 (Moderate)", "7-10 (Severe)"],
                "is_final": False
            }
            
    except Exception as e:
        # Fallback question
        return {
            "question": "How long have you been experiencing these symptoms?",
            "question_id": str(question_number),
            "type": "multiple_choice", 
            "options": ["Today", "Yesterday", "Few days", "Week", "Longer"],
            "is_final": False
        }

def analyze_symptoms_with_gemini(user_answers):
    """
    Use Gemini to analyze symptoms and provide diagnosis/recommendation
    """
    client = GeminiClient()
    
    context = f"""
    You are a medical screening assistant. Analyze the user's symptoms and provide a diagnosis.

    CONTEXT:
    - Screenable conditions: {', '.join(SCREENABLE_DISEASES)}
    - User's complete answers: {user_answers}

    TASK:
    Determine the most likely condition and provide appropriate recommendations.

    ANALYSIS CRITERIA:
    1. Match symptoms to screenable conditions
    2. Assess confidence level (high/medium/low)
    3. Determine if self-care is safe or doctor consultation is needed
    4. Provide specific, actionable advice

    DECISION RULES:
    - RECOMMEND SELF-CARE only for clear, minor conditions with high confidence
    - RECOMMEND SEE DOCTOR for:
      * Unclear or complex symptoms
      * Serious conditions not in screenable list
      * Low confidence in diagnosis
      * Any red flags or concerning symptoms
    - Be conservative: when in doubt, recommend medical consultation

    OUTPUT FORMAT:
    Return ONLY a valid JSON object with this exact structure:
    {{
        "diagnosis": "condition_name_from_screenable_list_or_Unknown",
        "confidence": "high/medium/low",
        "recommendation": "self_care/see_doctor",
        "advice": "Specific, actionable advice for the user"
    }}

    EXAMPLES:
    - For clear tension headache: "Tension-type headache", "high", "self_care", "Rest, hydration, and over-the-counter pain relievers should help."
    - For unclear chest pain: "Unknown", "low", "see_doctor", "Chest pain requires immediate medical evaluation. Please consult a healthcare provider."
    - For mild skin rash: "Mild skin rash", "medium", "self_care", "Apply gentle moisturizer and avoid irritants. If symptoms worsen, see a doctor."
    - For flu symptoms: "Flu (Influenza)", "high", "self_care", "Rest, stay hydrated, and take fever reducers. Seek medical care if symptoms worsen."
    - For common cold: "Common cold", "high", "self_care", "Rest, fluids, and over-the-counter cold medications should help."

    IMPORTANT: Return ONLY the JSON object, no additional text or explanations.
    """
    
    try:
        # Run async function in sync context
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        response = loop.run_until_complete(client.generate_response(context))
        loop.close()
        
        import json
        import re
        
        # Extract JSON from response
        json_match = re.search(r'\{.*\}', response, re.DOTALL)
        if json_match:
            diagnosis_data = json.loads(json_match.group())
            return diagnosis_data
        else:
            # Fallback diagnosis
            return {
                "diagnosis": "Unknown",
                "confidence": "low",
                "recommendation": "see_doctor",
                "advice": "Please consult with a healthcare provider for proper evaluation."
            }
            
    except Exception as e:
        return {
            "diagnosis": "Unknown",
            "confidence": "low", 
            "recommendation": "see_doctor",
            "advice": "Please consult with a healthcare provider for proper evaluation."
        }

def test_common_flu_flow():
    """
    Test function to demonstrate question generation for common flu symptoms
    """
    print("=== Testing Common Flu Question Flow ===\n")
    
    # Question 1: Initial symptoms
    print("Question 1: Initial symptoms")
    test_answers = {}
    question1 = generate_next_question(test_answers, 1)
    print(f"Generated: {question1['question']}")
    print(f"Options: {question1['options']}")
    print()
    
    # Question 2: After selecting "Fever and chills"
    print("Question 2: After selecting 'Fever and chills'")
    test_answers = {"initial_symptoms": "Fever and chills"}
    question2 = generate_next_question(test_answers, 2)
    print(f"Generated: {question2['question']}")
    print(f"Options: {question2['options']}")
    print()
    
    # Question 3: After answering "yes" to body aches
    print("Question 3: After answering 'yes' to body aches question")
    test_answers = {
        "initial_symptoms": "Fever and chills",
        "1": "yes"  # Assuming question_id "1" was about body aches
    }
    question3 = generate_next_question(test_answers, 3)
    print(f"Generated: {question3['question']}")
    print(f"Options: {question3['options']}")
    print()
    
    # Question 4: After answering "yes" to fatigue
    print("Question 4: After answering 'yes' to fatigue question")
    test_answers = {
        "initial_symptoms": "Fever and chills",
        "1": "yes",
        "2": "yes"  # Assuming question_id "2" was about fatigue
    }
    question4 = generate_next_question(test_answers, 4)
    print(f"Generated: {question4['question']}")
    print(f"Options: {question4['options']}")
    print()
    
    # Question 5: After answering "yes" to cough
    print("Question 5: After answering 'yes' to cough question")
    test_answers = {
        "initial_symptoms": "Fever and chills",
        "1": "yes",
        "2": "yes",
        "3": "yes"  # Assuming question_id "3" was about cough
    }
    question5 = generate_next_question(test_answers, 5)
    print(f"Generated: {question5['question']}")
    print(f"Options: {question5['options']}")
    print()
    
    # Question 6: After answering "no" to runny nose
    print("Question 6: After answering 'no' to runny nose question")
    test_answers = {
        "initial_symptoms": "Fever and chills",
        "1": "yes",
        "2": "yes",
        "3": "yes",
        "4": "no"  # Assuming question_id "4" was about runny nose
    }
    question6 = generate_next_question(test_answers, 6)
    print(f"Generated: {question6['question']}")
    print(f"Options: {question6['options']}")
    print()
    
    # Question 7: After answering "yes" to sudden onset
    print("Question 7: After answering 'yes' to sudden onset question")
    test_answers = {
        "initial_symptoms": "Fever and chills",
        "1": "yes",
        "2": "yes",
        "3": "yes",
        "4": "no",
        "5": "yes"  # Assuming question_id "5" was about sudden onset
    }
    question7 = generate_next_question(test_answers, 7)
    print(f"Generated: {question7['question']}")
    print(f"Options: {question7['options']}")
    print()
    
    # Final diagnosis
    print("Final Diagnosis:")
    test_answers = {
        "initial_symptoms": "Fever and chills",
        "1": "yes",  # Body aches
        "2": "yes",  # Fatigue
        "3": "yes",  # Cough
        "4": "no",   # Runny nose
        "5": "yes",  # Sudden onset
        "6": "no"    # Difficulty breathing
    }
    
    # Simulate the diagnosis response without Flask
    diagnosis = analyze_symptoms_test(test_answers)
    print(f"Diagnosis: {diagnosis}")
    print()

def analyze_symptoms_test(user_answers):
    """
    Test version of analyze_symptoms_with_gemini that doesn't use Flask
    """
    client = GeminiClient()
    
    context = f"""
    You are a medical screening assistant. Analyze the user's symptoms and provide a diagnosis.

    CONTEXT:
    - Screenable conditions: {', '.join(SCREENABLE_DISEASES)}
    - User's complete answers: {user_answers}

    TASK:
    Determine the most likely condition and provide appropriate recommendations.

    ANALYSIS CRITERIA:
    1. Match symptoms to screenable conditions
    2. Assess confidence level (high/medium/low)
    3. Determine if self-care is safe or doctor consultation is needed
    4. Provide specific, actionable advice

    DECISION RULES:
    - RECOMMEND SELF-CARE only for clear, minor conditions with high confidence
    - RECOMMEND SEE DOCTOR for:
      * Unclear or complex symptoms
      * Serious conditions not in screenable list
      * Low confidence in diagnosis
      * Any red flags or concerning symptoms
    - Be conservative: when in doubt, recommend medical consultation

    OUTPUT FORMAT:
    Return ONLY a valid JSON object with this exact structure:
    {{
        "diagnosis": "condition_name_from_screenable_list_or_Unknown",
        "confidence": "high/medium/low",
        "recommendation": "self_care/see_doctor",
        "advice": "Specific, actionable advice for the user"
    }}

    EXAMPLES:
    - For clear tension headache: "Tension-type headache", "high", "self_care", "Rest, hydration, and over-the-counter pain relievers should help."
    - For unclear chest pain: "Unknown", "low", "see_doctor", "Chest pain requires immediate medical evaluation. Please consult a healthcare provider."
    - For mild skin rash: "Mild skin rash", "medium", "self_care", "Apply gentle moisturizer and avoid irritants. If symptoms worsen, see a doctor."
    - For flu symptoms: "Flu (Influenza)", "high", "self_care", "Rest, stay hydrated, and take fever reducers. Seek medical care if symptoms worsen."
    - For common cold: "Common cold", "high", "self_care", "Rest, fluids, and over-the-counter cold medications should help."

    IMPORTANT: Return ONLY the JSON object, no additional text or explanations.
    """
    
    try:
        # Run async function in sync context
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        response = loop.run_until_complete(client.generate_response(context))
        loop.close()
        
        import json
        import re
        
        # Extract JSON from response
        json_match = re.search(r'\{.*\}', response, re.DOTALL)
        if json_match:
            diagnosis_data = json.loads(json_match.group())
            return diagnosis_data
        else:
            # Fallback diagnosis
            return {
                "diagnosis": "Unknown",
                "confidence": "low",
                "recommendation": "see_doctor",
                "advice": "Please consult with a healthcare provider for proper evaluation."
            }
            
    except Exception as e:
        return {
            "diagnosis": "Unknown",
            "confidence": "low", 
            "recommendation": "see_doctor",
            "advice": "Please consult with a healthcare provider for proper evaluation."
        }

@questions_bp.route('/status', methods=['GET'])
def get_session_status():
    """
    Get the current session status and available options
    """
    return jsonify({
        "status": "ready",
        "screenable_conditions": SCREENABLE_DISEASES,
        "max_questions": 20,
        "description": "AI-powered symptom screening with dynamic question generation"
    })

@questions_bp.route('/test', methods=['POST'])
def test_question_flow():
    """
    Test endpoint to simulate the complete question flow
    """
    try:
        data = request.json
        test_scenario = data.get("scenario", "flu")
        
        if test_scenario == "flu":
            # Simulate flu symptoms
            test_answers = {
                "initial_symptoms": "Fever and chills",
                "1": "yes",  # Body aches
                "2": "yes",  # Fatigue
                "3": "yes",  # Cough
                "4": "no",   # Runny nose
                "5": "yes"   # Sudden onset
            }
        elif test_scenario == "headache":
            # Simulate headache symptoms
            test_answers = {
                "initial_symptoms": "Headache",
                "1": "no",   # Fever
                "2": "yes",  # Tension-like pain
                "3": "no"    # Nausea
            }
        else:
            test_answers = {}
        
        # Generate next question
        next_question = generate_next_question(test_answers, len(test_answers) + 1)
        
        return jsonify({
            "test_scenario": test_scenario,
            "current_answers": test_answers,
            "next_question": next_question,
            "question_count": len(test_answers)
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    test_common_flu_flow()
