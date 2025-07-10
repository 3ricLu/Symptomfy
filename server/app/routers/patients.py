from flask import Blueprint, request, jsonify, make_response, Response, abort, g

from ..crud.users import UserCrud
from ..crud.patients import PatientCrud
from ..crud.doctors import DoctorCrud
from ..database.models import Patient
from ..database.models import User
from ..decorators.decorators import with_db_session, with_authenticated_user

patient_bp = Blueprint("patient_bp", __name__)


@patient_bp.route("", methods=["GET"])
@with_db_session
@with_authenticated_user
def get_patient(db) -> Response:
    user: User = g.user
    user_crud = UserCrud(db)
    patient_crud = PatientCrud(db)

    try:
        patient: Patient = patient_crud.get_patient(user_id=user.id)
        user_profile = user.to_private_dicts()
        patient_profile = patient.to_private_dicts()
        response_data = {
            "message": f"Found patient with user_id {user.id}",
            **user_profile,
            **patient_profile,
        }

        return make_response(jsonify(response_data), 200)

    except Exception as e:
        return make_response(
            jsonify(
                {
                    "message": f"Couldn't find patient with user_id {user.id}",
                    "error": str(e),
                }
            ),
            404,
        )


@patient_bp.route("", methods=["PUT"])
@with_db_session
@with_authenticated_user
def update_patient(db) -> Response:
    user = g.user
    patient_crud = PatientCrud(db)

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
        patient = patient_crud.update(user_id=user.id, **kwargs)
    except Exception as e:
        return abort(500, str(e))

    return make_response(f"Updated patient with ID {patient.id}", 204)
