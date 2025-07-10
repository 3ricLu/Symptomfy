from flask import Blueprint, request, jsonify, make_response, Response

from ..crud.users import UserCrud
from ..crud.patients import PatientCrud
from ..auth.user_auth import auth, refresh_token
from ..decorators.decorators import with_db_session
from ..utils.jwt_handler import validate_access_token

from ..database.models import User

user_bp = Blueprint("user_bp", __name__)


def build_auth_response(user_crud: UserCrud, user: User, tokens, message):
    return {"message": message, "user-role": user_crud.userRole(user=user), **tokens}


@user_bp.route("", methods=["POST"])
@with_db_session
def create_user(db) -> Response:
    data = request.get_json() or {}
    email, password, name = data.get("email"), data.get("password"), data.get("name")

    if not (name and email and password):
        return make_response(
            jsonify({"message": "Missing required user information"}), 400
        )

    user_crud = UserCrud(db)
    patient_crud = PatientCrud(db)

    try:
        user = user_crud.create(email=email, password=password, name=name)
    except Exception as e:
        return make_response(jsonify(str(e)), 400)

    try:
        patient_crud.create(user_id=user.id)
    except Exception as e:
        return make_response(jsonify(str(e)), 500)

    tokens = auth(user_crud=user_crud, email=email, password=password)

    return make_response(
        jsonify(
            build_auth_response(
                user_crud, user, tokens, f"User with ID {user.id} Successfully Created"
            )
        ),
        201,
    )


@user_bp.route("/auth", methods=["POST"])
@with_db_session
def authenticate_user(db) -> Response:
    data = request.get_json() or {}
    email, password = data.get("email"), data.get("password")

    if not (email and password):
        return make_response(
            jsonify({"message": "Missing required user information"}), 400
        )

    user_crud = UserCrud(db)
    user = user_crud.get_user(email=email)
    if not user:
        return make_response(
            jsonify({"message": f"User with email {email} not found"}), 404
        )

    try:
        tokens = auth(user_crud=user_crud, email=email, password=password)
        if not isinstance(tokens, dict):
            raise ValueError("Invalid credentials")
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 400)

    return make_response(
        jsonify(
            build_auth_response(
                user_crud,
                user,
                tokens,
                f"User with email {email} Successfully Authenticated",
            )
        ),
        200,
    )


@user_bp.route("/refresh", methods=["POST"])
@with_db_session
def refresh_user_token(db) -> Response:
    refresh_token_value = request.headers.get("refresh-token")
    if not refresh_token_value:
        return make_response(
            jsonify({"message": "Missing required header: refresh-token"}), 400
        )

    user_crud = UserCrud(db)
    try:
        tokens = refresh_token(user_crud=user_crud, token=refresh_token_value)
        payload = validate_access_token(tokens["access-token"])
        user_id = payload.get("sub")
        user = user_crud.get_user(id=user_id)
        if not user:
            raise ValueError("User not found")
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 400)

    return make_response(
        jsonify(
            build_auth_response(user_crud, user, tokens, "Token refreshed successfully")
        ),
        200,
    )
