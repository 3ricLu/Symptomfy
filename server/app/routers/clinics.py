from functools import wraps
from flask import Blueprint, request, jsonify, make_response, Response, abort, g
from sqlalchemy.orm import Session

from ..database.database import SessionLocal
from ..database.models import User, Clinic, ClinicMembership
from ..crud.users import UserCrud
from ..crud.doctors import DoctorCrud
from ..crud.clinics import ClinicCrud
from ..auth.user_auth import auth

from ..decorators.decorators import (
    with_db_session,
    with_authenticated_user,
    roles_required,
)

clinic_bp = Blueprint("clinic_bp", __name__)


@clinic_bp.route("", methods=["POST"])
@with_db_session
@with_authenticated_user
@roles_required("admin", "doctor")
def createClinic(db: Session):
    user = g.user
    is_doctor = True if g.user_role == "doctor" else False

    data = request.get_json()
    if not data or "name" not in data:
        return make_response(
            jsonify({"message": "Missing required field: 'name'"}), 400
        )

    try:
        clinic_crud = ClinicCrud(db)

        new_clinic: Clinic = clinic_crud.create(**data)
        clinic_admin: ClinicMembership = clinic_crud.add_user_to_clinic(
            clinic_id=new_clinic.id, user_id=user.id, role="admin"
        )
        if is_doctor:
            clinic_doctor: ClinicMembership = clinic_crud.add_user_to_clinic(
                clinic_id=new_clinic.id, user_id=user.id, role="doctor"
            )
    except Exception as e:
        raise

    return make_response(jsonify({"message": f"clinic with {new_clinic.id}"}), 200)


@clinic_bp.route("pending", methods=["GET"])
@with_db_session
@with_authenticated_user
@roles_required("admin")
def getPendingClinics(db: Session):
    pending_clinics = ClinicCrud(db).get_pending_clinics()
    return make_response(
        jsonify([clinic.baseInformation() for clinic in pending_clinics]), 200
    )


@clinic_bp.route("pending", methods=["PUT"])
@with_db_session
@with_authenticated_user
@roles_required("admin")
def setPendingClinics(db: Session):
    clinic_crud = ClinicCrud(db)
    clinic_id = request.get_json().get("id")
    if not clinic_id:
        return make_response(
            jsonify({"message": "Invalid request - missing field: 'id'"}), 400
        )
    try:
        updated_clinic = clinic_crud.update(clinic_id=clinic_id, is_approved=True)
        return make_response(
            jsonify({"message": f"Successfully approved clinic with id {clinic_id}"}),
            200,
        )
    except Exception as e:
        if "does not exist" in str(e):
            return make_response(jsonify({"message": str(e)}), 404)
        raise
