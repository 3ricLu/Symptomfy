import os
import json
import google.generativeai as genai
from .config import AISettings

class GeminiClient:
    def __init__(self):
        self.use_mock = os.getenv("USE_GPT_MOCK", "0") == "1"
        
        if not self.use_mock:
            self.settings = AISettings()
            genai.configure(api_key=self.settings.gemini_api_key)
            self.model = genai.GenerativeModel(self.settings.gemini_model)
    
    async def generate_response(self, prompt: str) -> str:
        if self.use_mock:
            return self._mock_response(prompt)
        
        response = await self.model.generate_content_async(prompt)
        return response.text
    
    def apiKey(self):
        return self.settings.gemini_api_key
    
    def _mock_response(self, prompt: str) -> str:
        """Mock responses for development/testing"""
        if "medical screening assistant" in prompt.lower():
            if "analyze the user's symptoms" in prompt.lower():
                # Mock diagnosis response
                return json.dumps({
                    "diagnosis": "Common cold",
                    "confidence": "medium",
                    "recommendation": "self_care",
                    "advice": "Rest, drink fluids, and take over-the-counter medications as needed. If symptoms worsen or persist beyond 7 days, consult a healthcare provider."
                })
            else:
                # Mock question response
                if "fever" in prompt.lower() or "initial_symptoms" in prompt.lower():
                    return json.dumps({
                        "question": "Do you have body aches along with your fever?",
                        "question_id": "2",
                        "type": "yes/no",
                        "options": ["yes", "no"],
                        "is_final": False
                    })
                else:
                    return json.dumps({
                        "question": "Have you been experiencing these symptoms for more than 3 days?",
                        "question_id": "3",
                        "type": "yes/no", 
                        "options": ["yes", "no"],
                        "is_final": True
                    })
        
        return "Mock response for development purposes."