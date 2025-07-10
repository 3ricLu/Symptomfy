import os
from pydantic_settings import BaseSettings


class AISettings(BaseSettings):
    gemini_api_key: str
    gemini_model: str = "gemini-2.0-flash"

    class Config:
        env_file = ".env"
        extra = "ignore"  # Ignore extra fields from .env
