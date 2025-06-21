from functools import wraps
from flask import Blueprint, request, jsonify, make_response, Response, abort

from ..database.database import SessionLocal
from ..crud.users import UserCrud
from ..auth.user_auth import auth

user_bp = Blueprint('user_bp', __name__)

def with_db_session_and_crud(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        db = SessionLocal()
        user_crud = UserCrud(db)
        try:
            return func(db, user_crud, *args, **kwargs)
        finally:
            db.close()
    return wrapper

@user_bp.route('', methods=['POST'])
@with_db_session_and_crud
def create_user(db, user_crud) -> Response:
    email = request.get_json().get("email")
    password = request.get_json().get("password")
    name = request.get_json().get("name")
    
    if not (name and email and password):
        return make_response(jsonify({"message": "Missing required user information"}), 400)
    
    try:
        User = user_crud.create(email=email, password=password, name=name)
        
    except Exception as e:
            return make_response(jsonify(str(e)), 400)
    
    payload = auth(user_crud=user_crud, email=email, password=password)
    
    response_data = {
    "message": f"User with ID {User.id} Successfully Created",
    **payload
    }
    return make_response(jsonify(response_data), 201)

@user_bp.route('/auth', methods=['POST'])
@with_db_session_and_crud
def authenticate_user(db, user_crud) -> Response:
    email = request.get_json().get("email")
    password = request.get_json().get("password")
    
    if not (email and password):
        return make_response(jsonify({"message": "Missing required user information"}), 400)

    user = user_crud.get_user(email=email)
    
    if not user:
        return make_response(jsonify({
            "message": f"User with email {email} not found"
        }), 404)

    try:
        payload = auth(user_crud=user_crud, email=email, password=password)
        if not isinstance(payload, dict):
            raise ValueError("Invalid credentials")
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 400)

    response_data = {
        "message": f"User with email {email} Successfully Authenticated",
        **payload
    }

    return make_response(jsonify(response_data), 200)
