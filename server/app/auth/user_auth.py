from datetime import datetime, timedelta
from sqlalchemy.orm import Session

from ..crud.users import UserCrud
from ..utils.hashing import verify_password
from ..database.models import User
from ..settings import settings
from ..utils.jwt_handler import create_token, validate_access_token

def auth(user_crud: UserCrud, email: str, password: str):
    user = user_crud.get_user(email=email)
    if user and verify_password(password=password, hashed_password=user.hashedPassword):
        access_payload = _auth_payload(user, timedelta(minutes=30))
        refresh_payload = _auth_payload(user, timedelta(days=1))
        return {
            "access-token": create_token(access_payload),
            "refresh-token": create_token(refresh_payload),
            "token-type": "bearer"
        }
    return False

def _auth_payload(user: User, expiration_delta: timedelta):
    return {
        "sub": str(user.id),
        "iss": settings.issuer,
        "iat": datetime.utcnow(),
        "exp": datetime.utcnow() + expiration_delta
    }

def refresh_token(user_crud: UserCrud, token: str):
    payload = validate_access_token(token)
    if not payload:
        return False

    user_id = payload.get("sub")
    if not user_id:
        return False

    user = user_crud.get_user(id=int(user_id))
    if not user:
        return False

    access_payload = _auth_payload(user, timedelta(minutes=15))
    refresh_payload = _auth_payload(user, timedelta(days=1))
    return {
        "access-token": create_token(access_payload),
        "refresh-token": create_token(refresh_payload),
        "token-type": "bearer"
    }