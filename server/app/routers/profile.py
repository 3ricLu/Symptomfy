from flask import Blueprint, request, jsonify, make_response, Response, abort, g
from typing import Optional

from ..database.models import User, Patient, Doctor

from ..crud.patients import PatientCrud
from ..crud.doctors import DoctorCrud
from ..schemas.profileSchemas import ProfileSchema
from ..decorators.decorators import with_db_session, with_authenticated_user

profile_bp = Blueprint("profile_bp", __name__)

@profile_bp.route("", methods=["GET"])
@with_db_session
@with_authenticated_user
def get_profile(db) -> Response:
    user: User = g.user
    patient: Optional[Patient] = PatientCrud(db).get_patient(user_id=user.id)
    doctor: Optional[Doctor] = DoctorCrud(db).get_doctor(user_id=user.id)
    
    profile_data = {
        "id": user.id,
        "email": user.email,
        "first_name": user.first_name,
        "middle_name": user.middle_name,
        "last_name": user.last_name,
        "global_role": user.global_role,
        "created_at": user.created_at,
        "updated_at": user.updated_at,
        "patient_profile": None,
        "doctor_profile": None,
    }

    if patient:
        profile_data["patient_profile"] = {
            "sex": patient.sex,
            "address": patient.address,
            "age": patient.age
        }

    if doctor:
        profile_data["doctor_profile"] = {
            "doctor_id": doctor.id,
            "specialty": doctor.specialty,
            "is_approved": doctor.is_approved
        }

    return jsonify(ProfileSchema(**profile_data).model_dump())
