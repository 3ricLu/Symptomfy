from functools import wraps
from flask import Blueprint, request, jsonify, make_response, Response, abort

from ..database.database import SessionLocal
from ..crud.users import UserCrud
from ..crud.doctors import DoctorCrud
from ..auth.user_auth import auth
from ..utils.jwt_handler import validate_access_token

doctor_bp = Blueprint('doctor_bp', __name__)

def with_db_session_and_crud(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        db = SessionLocal()
        user_crud = UserCrud(db)
        doctor_crud = DoctorCrud(db)
        try:
            return func(db, user_crud, doctor_crud, *args, **kwargs)
        finally:
            db.close()
    return wrapper

@doctor_bp.route('', methods=['GET'])
@with_db_session_and_crud
def get_doctor(db, user_crud, doctor_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    user_id = int(payload.get("sub"))
    
    try:
        doctor = doctor_crud.get_doctor(user_id=user_id)
    except Exception as e:
        return make_response(jsonify({
            "message": f"Couldn't find doctor with user_id {user_id}"
            }), 404)
    response_data = {
        "message": f"Found doctor with user_id {user_id}",
        **doctor.to_dict()
    }

    return make_response(jsonify(response_data), 200)

@doctor_bp.route('', methods=['PUT'])
@with_db_session_and_crud
def update_doctor(db, user_crud, doctor_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    user_id = int(payload.get("sub"))
    
    specialty = request.get_json().get("specialty") or None
    clinic_id = request.get_json().get("clinic_id") or None
    
    kwargs = {}
    if specialty is not None:
        kwargs["specialty"] = specialty
    if clinic_id is not None:
        kwargs["clinic_id"] = clinic_id

    try:
        doctor = doctor_crud.update(user_id=user_id, **kwargs)
    except Exception as e:
        return abort(500, str(e))

    return make_response(f"Updated Doctor with ID {doctor.id}", 204)