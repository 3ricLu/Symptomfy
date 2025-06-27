from flask import Blueprint, request, jsonify, g
from app.ai.gemini_client import GeminiClient
import asyncio

from app.sessionStorage.sessionStorage import debug_get_all_session
from ..utils.jwt_handler import validate_access_token

questions_bp = Blueprint("questions_bp", __name__)

@questions_bp.route('/initial', methods=['POST'])
def initialQuestion():
    """
    Starts a new session: clears any existing one and stores user_id.
    Expected payload: { "user_id": "12345" }
    """
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    promptinfo = request.get_json()["body_locations"]
    
    user_id = int(payload.get("sub"))
    
    if not promptinfo:
        return jsonify({"error": "Prompt info is required"}), 400
    if not user_id:
        return jsonify({"error": "user_id is required"}), 400

    client = GeminiClient()
    
    g.session_data.clear()
    g.session_data["user_id"] = user_id
    g.session_data["initialPainPoints"] = ", ".join(promptinfo)
    g.session_data["questionsAsked"] = []
    g.session_data["answers"] = []

    prompt = f"""
    You are a medical assistant helping a user through a diagnostic flow.
    
    Please make the questions clear and concise.

    Initial Pain Points: {g.session_data["initialPainPoints"]}
    Previous Answers: {g.session_data["answers"]}
    Questions Already Asked: {g.session_data["questionsAsked"]}

    Ask one new yes/no question that helps clarify the user's condition.
    """
    
    response = asyncio.run(client.generate_response(prompt))
    
    g.session_data["questionsAsked"].append(response)

    return jsonify({
        "message": "Succesful Prompt",
        "response": response
    })
    
@questions_bp.route('/next', methods=['POST'])
def nextQuestion():
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    promptinfo = request.get_json()["answer"]
    
    user_id = int(payload.get("sub"))
    
    if not promptinfo:
        return jsonify({"error": "prompt info is required"}), 400
    if not user_id:
        return jsonify({"error": "user_id is required"}), 400
    
    g.session_data["answers"].append(promptinfo)
    
    paired = dict(zip(g.session_data["questionsAsked"], g.session_data["answers"]))
    print(paired, "PAIRED INFORMATION")
    client = GeminiClient()

    prompt = f"""
    You are a medical assistant helping a user through a diagnostic flow. Your goal is to try and diagnos the patient based on a set of symptoms.
    
    
    DO NOT reiterate previous questions in your answer, do not mention them.
    
    Please do not repeat a question that has already been asked.
    Also please look for the next question that may best address the currently known set of questions and answers as well as initial pain points.
    Initial Pain Points: {g.session_data["initialPainPoints"]}
    Previously asked questions and answers of the form (question, answer): {paired}

    Ask one new yes/no question that helps clarify the user's condition.
    """
    
    response = asyncio.run(client.generate_response(prompt))
    
    g.session_data["questionsAsked"].append(response)
    
    return jsonify({
        "message": "Succesful Prompt",
        "response": response
    })

@questions_bp.route("/diagnos", methods=["POST"])
def verdict():
    
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    promptinfo = request.get_json()["answer"]
    
    user_id = int(payload.get("sub"))
    
    if not promptinfo:
        return jsonify({"error": "prompt info is required"}), 400
    if not user_id:
        return jsonify({"error": "user_id is required"}), 400
    
    g.session_data["answers"].append(promptinfo)
    
    paired = dict(zip(g.session_data["questionsAsked"], g.session_data["answers"]))

    prompt = f"""
    You are a clinical diagnostic assistant. The user has completed a guided diagnostic interview. Based on their initial symptoms and the complete set of questions and answers, your goal is to provide the most likely diagnosis (or a short list of likely conditions), along with a brief rationale for your assessment.

    Be direct and medically focused. Include:
    - A most likely condition (or top 3 possibilities if uncertain)
    - A short clinical reasoning for the assessment
    - Avoid asking further questions
    - Do not repeat or restate the input

    Initial Pain Points: {g.session_data["initialPainPoints"]}

    Question and Answer History:
    {paired}

    Now, based on this data, what is the most probable diagnosis or set of diagnoses?
    """
    
    client = GeminiClient()
    
    response = asyncio.run(client.generate_response(prompt))
    
    
    return jsonify({
        "message": "Succesful Prompt",
        "response": response
    })