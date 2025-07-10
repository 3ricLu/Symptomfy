from flask import Blueprint, request, jsonify, make_response, Response, abort, g

from ..crud.users import UserCrud
from ..crud.patients import PatientCrud
from ..crud.doctors import DoctorCrud
from ..decorators.decorators import with_db_session, with_authenticated_user

patient_bp = Blueprint("patient_bp", __name__)


@patient_bp.route("", methods=["GET"])
@with_db_session
@with_authenticated_user
def get_patient(db) -> Response:
    user = g.user
    user_crud = UserCrud(db)
    patient_crud = PatientCrud(db)
    doctor_crud = DoctorCrud(db)

    try:
        patient = patient_crud.get_patient(user_id=user.id)

        doctor_info = None
        if patient.familyDoctor is not None:
            doctor = doctor_crud.get_doctor(id=patient.familyDoctor)
            doctor_user = user_crud.get_user(id=doctor.user_id)
            doctor_info = {
                **doctor.to_patient_dict(),
                **doctor_user.doctor_to_patient_dict(),
            }

        response_data = {
            "message": f"Found patient with user_id {user.id}",
            **patient.to_dict(),
            **({"family_doctor_info": doctor_info} if doctor_info else {}),
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
