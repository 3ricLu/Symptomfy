from functools import wraps
from flask import Blueprint, request, jsonify, make_response, Response, abort

from ..database.database import SessionLocal
from ..crud.users import UserCrud
from ..crud.booking import Booking
from ..auth.user_auth import auth
from ..utils.jwt_handler import validate_access_token

booking_bp = Blueprint('booking_bp', __name__)

def with_db_session_and_crud(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        db = SessionLocal()
        user_crud = UserCrud(db)
        booking_crud = Booking(db)
        try:
            return func(db, user_crud, booking_crud, *args, **kwargs)
        finally:
            db.close()
    return wrapper

@booking_bp.route('', methods=['GET'])
@with_db_session_and_crud
def get_booking(db, user_crud, booking_crud) -> Response:
    access_token = request.headers.get("access-token")
    payload = validate_access_token(access_token)
    
    user_id = int(payload.get("sub"))
    
    try:
        booking = booking_crud.get_booking_all(user_id=user_id)
    except Exception as e:
        return make_response(jsonify({
            "message": f"Couldn't find bookings for userId {user_id}"
            }), 404)
    response_data = {
        "message": f"Found bookings for user_id {user_id}",
        **booking.to_dict()
    }

    return make_response(jsonify(response_data), 200)

