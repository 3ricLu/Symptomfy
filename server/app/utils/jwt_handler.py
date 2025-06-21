import jwt
from app.settings import settings
from flask import abort

SECRET_KEY = settings.secret_key

def create_token(data: dict):
      return jwt.encode(payload=data, key=SECRET_KEY, algorithm="HS256")

def validate_access_token(access_token: str):
      if not access_token:
            return abort(401, "Missing or invalid access_token")
      
      payload = validate_access_token_helper(access_token)
      
      if not payload:
            return abort(401, "Invalid or exipired token")
      
      return payload
def validate_access_token_helper(token: str):
      try:
            payload = jwt.decode(jwt=token, key=SECRET_KEY, algorithms=["HS256"])
            return payload
      except Exception as e:
            return False