from flask import Blueprint, request, jsonify, make_response, Response, abort, g
from ..crud.doctors import DoctorCrud
from ..decorators.decorators import with_db_session, with_authenticated_user, roles_required

doctor_bp = Blueprint('doctor_bp', __name__)

@doctor_bp.route('', methods=['POST'])
@with_db_session
@with_authenticated_user
def create_doctor(db) -> Response:
    user = g.user
    data = request.get_json() or {}

    clinic_id = data.get("clinic_id")
    specialty = data.get("specialty")

    user_id = data.get("user_id")
    if user_id and g.user_role == "admin":
        target_user_id = user_id
    else:
        target_user_id = user.id

    doctor_crud = DoctorCrud(db)

    try:
        new_doctor = doctor_crud.create(
            user_id=target_user_id,
            clinic_id=clinic_id,
            specialty=specialty
        )
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 400)

    return make_response(jsonify({
        "message": f"Doctor profile created for user_id {target_user_id}",
        **new_doctor.to_dict()
    }), 201)

    
@doctor_bp.route('', methods=['GET'])
@with_db_session
@with_authenticated_user
def get_doctor(db) -> Response:
    user = g.user
    doctor_crud = DoctorCrud(db)
    
    try:
        doctor = doctor_crud.get_doctor(user_id=user.id)
    except Exception:
        return make_response(jsonify({
            "message": f"Couldn't find doctor with user_id {user.id}"
        }), 404)
    
    response_data = {
        "message": f"Found doctor with user_id {user.id}",
        **doctor.to_dict()
    }

    return make_response(jsonify(response_data), 200)

@doctor_bp.route('', methods=['PUT'])
@with_db_session
@with_authenticated_user
def update_doctor(db) -> Response:
    user = g.user
    doctor_crud = DoctorCrud(db)

    data = request.get_json()
    specialty = data.get("specialty") if data else None
    clinic_id = data.get("clinic_id") if data else None

    kwargs = {}
    if specialty is not None:
        kwargs["specialty"] = specialty
    if clinic_id is not None:
        kwargs["clinic_id"] = clinic_id

    try:
        doctor = doctor_crud.update(user_id=user.id, **kwargs)
    except Exception as e:
        return abort(500, str(e))

    return make_response(f"Updated Doctor with ID {doctor.id}", 204)

@doctor_bp.route('/pending', methods=['GET'])
@with_db_session
@with_authenticated_user
@roles_required("admin")
def get_pending_doctors(db) -> Response:
    doctor_crud = DoctorCrud(db)
    pending_doctors = doctor_crud.get_pending_doctors()
    return make_response(jsonify([doctor.to_dict() for doctor in pending_doctors]), 200)

@doctor_bp.route('/pending', methods=['PUT'])
@with_db_session
@with_authenticated_user
@roles_required("admin")
def approve_pending_doctor(db) -> Response:
    doctor_crud = DoctorCrud(db)
    doctor_id = request.get_json().get("id")
    if not doctor_id:
        return make_response(jsonify({"message": "Invalid request - missing field: 'id'"}), 400)
    try:
        updated_doctor = doctor_crud.update(user_id=doctor_id, is_approved=True)
        return make_response(jsonify({"message": f"Successfully approved doctor with user_id {doctor_id}"}), 200)
    except Exception as e:
        if "does not exist" in str(e):
            return make_response(jsonify({"message": str(e)}), 404)
        raise
