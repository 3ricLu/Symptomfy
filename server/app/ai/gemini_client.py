import google.generativeai as genai
from .config import AISettings

class GeminiClient:
    def __init__(self):
        self.settings = AISettings()
        genai.configure(api_key=self.settings.gemini_api_key)
        self.model = genai.GenerativeModel(self.settings.gemini_model)
    
    async def generate_response(self, prompt: str) -> str:
        response = await self.model.generate_content_async(prompt)
        return response.text