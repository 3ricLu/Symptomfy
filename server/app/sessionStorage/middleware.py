# app/middleware.py

from flask import request, g
import uuid
from app.sessionStorage.sessionStorage import get_session, save_session

def session_middleware(app):
    @app.before_request
    def load_session():
        print(request.headers.get("X-Session-Id"))
        session_id = request.headers.get("X-Session-Id") or str(uuid.uuid4())
        g.session_id = session_id
        g.session_data = get_session(session_id)

    @app.after_request
    def save_session_data(response):
        save_session(g.session_id, g.session_data)
        response.headers["X-Session-Id"] = g.session_id
        return response
