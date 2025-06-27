from functools import wraps
from flask import Blueprint, request, jsonify, make_response, Response, abort

from ..database.database import SessionLocal
from ..crud.users import UserCrud
from ..crud.patients import PatientCrud
from ..crud.doctors import DoctorCrud
from ..utils.jwt_handler import validate_access_token

patient_bp = Blueprint('patient_bp', __name__)


# ✅ Unified decorator that provides all necessary CRUD instances
def with_all_cruds(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        db = SessionLocal()
        user_crud = UserCrud(db)
        patient_crud = PatientCrud(db)
        doctor_crud = DoctorCrud(db)
        try:
            return func(db, user_crud, patient_crud, doctor_crud, *args, **kwargs)
        finally:
            db.close()
    return wrapper


@patient_bp.route('', methods=['GET'])
@with_all_cruds
def get_patient(db, user_crud, patient_crud, doctor_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)

    user_id = int(payload.get("sub"))

    try:
        patient = patient_crud.get_patient(user_id=user_id)

        doctor_info = None
        if patient.familyDoctor is not None:
            print(patient.familyDoctor)
            doctor = doctor_crud.get_doctor(id = patient.familyDoctor)
            doctor_user = user_crud.get_user(id = doctor.user_id)
            doctor_info = {
                **doctor.to_patient_dict(),
                **doctor_user.doctor_to_patient_dict()
            }

        response_data = {
            "message": f"Found patient with user_id {user_id}",
            **patient.to_dict(),
            **({"family_doctor_info": doctor_info} if doctor_info else {})
        }

        return make_response(jsonify(response_data), 200)

    except Exception as e:
        return make_response(jsonify({
            "message": f"Couldn't find patient with user_id {user_id}",
            "error": str(e)
        }), 404)


@patient_bp.route('', methods=['PUT'])
@with_all_cruds
def update_patient(db, user_crud, patient_crud, doctor_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)

    user_id = int(payload.get("sub"))

    data = request.get_json() or {}

    kwargs = {}
    if "sex" in data:
        kwargs["sex"] = data["sex"]
    if "age" in data:
        kwargs["age"] = data["age"]
    if "address" in data:
        kwargs["address"] = data["address"]
    if "familyDoctor" in data:
        kwargs["familyDoctor"] = data["familyDoctor"]

    try:
        patient = patient_crud.update(user_id=user_id, **kwargs)
    except Exception as e:
        return abort(500, str(e))

    return make_response(f"Updated patient with ID {patient.id}", 204)
