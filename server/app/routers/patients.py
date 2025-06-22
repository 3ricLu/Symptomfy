from functools import wraps
from flask import Blueprint, request, jsonify, make_response, Response, abort

from ..database.database import SessionLocal
from ..crud.users import UserCrud
from ..crud.patients import PatientCrud
from ..auth.user_auth import auth
from ..utils.jwt_handler import validate_access_token

patient_bp = Blueprint('patient_bp', __name__)

def with_db_session_and_crud(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        db = SessionLocal()
        user_crud = UserCrud(db)
        patient_crud = PatientCrud(db)
        try:
            return func(db, user_crud, patient_crud, *args, **kwargs)
        finally:
            db.close()
    return wrapper

@patient_bp.route('', methods=['GET'])
@with_db_session_and_crud
def get_patient(db, user_crud, patient_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    user_id = int(payload.get("sub"))
    
    try:
        patient = patient_crud.get_patient(user_id=user_id)
    except Exception as e:
        return make_response(jsonify({
            "message": f"Couldn't find patient with user_id {user_id}"
            }), 404)
    response_data = {
        "message": f"Found patient with user_id {user_id}",
        **patient.to_dict()
    }
    print(patient)
    return make_response(jsonify(response_data), 200)

@patient_bp.route('', methods=['PUT'])
@with_db_session_and_crud
def update_patient(db, user_crud, patient_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    user_id = int(payload.get("sub"))
    
    sex = request.get_json().get("sex") or None
    age = request.get_json().get("age") or None
    address = request.get_json().get("address") or None
    familyDoctor = request.get_json().get("familyDoctor") or None
    
    kwargs = {}
    if sex is not None:
        kwargs["sex"] = sex
    if age is not None:
        kwargs["age"] = age
    if address is not None:
        kwargs["address"] = address
    if familyDoctor is not None:
        kwargs["familyDoctor"] = familyDoctor

    try:
        patient = patient_crud.update(user_id=user_id, **kwargs)
    except Exception as e:
        return abort(500, str(e))

    return make_response(f"Updated patient with ID {patient.id}", 204)