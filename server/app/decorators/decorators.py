from functools import wraps
from flask import request, jsonify, make_response, g
from sqlalchemy.orm import Session

from app.utils.jwt_handler import validate_access_token
from app.crud.doctors import DoctorCrud
from app.crud.patients import PatientCrud
from app.crud.users import UserCrud
from app.database.database import SessionLocal
from app.database.models import User


def with_db_session(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        db = SessionLocal()
        try:
            return func(db, *args, **kwargs)
        finally:
            db.close()

    return wrapper


def with_authenticated_user(func):
    @wraps(func)
    def wrapper(db: Session, *args, **kwargs):
        access_token = request.headers.get("access-token")
        payload = validate_access_token(access_token)
        user_id = int(payload.get("sub"))
        user_crud = UserCrud(db)
        user: User = user_crud.get_user(id=user_id)

        if not user:
            return make_response(
                jsonify({"message": f"User with id {user_id} not found"}), 403
            )
        g.user = user

        return func(db, *args, **kwargs)

    return wrapper


def roles_required(*allowed_roles):
    def decorator(func):
        @wraps(func)
        def wrapper(db: Session, *args, **kwargs):
            doctor_crud = DoctorCrud(db)
            patient_crud = PatientCrud(db)

            user = g.user
            user_role = g.user.global_role

            if not user_role:
                if "doctor" in allowed_roles:
                    user_role = (
                        "doctor" if doctor_crud.isDoctor(user_id=user.id) else None
                    )
                elif "patient" in allowed_roles:
                    user_role = (
                        "patient" if patient_crud.isPatient(user_id=user.id) else None
                    )

            if user_role not in allowed_roles:
                return make_response(
                    jsonify(
                        {
                            "message": f"User with id {user.id} does not have required role(s): {allowed_roles}"
                        }
                    ),
                    403,
                )
            g.user_role = user_role
            return func(db, *args, **kwargs)

        return wrapper

    return decorator
