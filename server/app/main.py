# server/app/main.py

import os
import logging

from flask import Flask, Blueprint, jsonify, make_response, request
from flask_cors import CORS

from app.settings import settings
from app.routers.users import user_bp
from app.routers.questions import questions_bp
from app.routers.patients import patient_bp
from app.sessionStorage.middleware import session_middleware

app = Flask(__name__)
session_middleware(app)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
logger.info(f"✅ DATABASE_URL: {settings.database_url}")

CORS(app, resources={r"/api/*": {
    "origins": [
        "http://localhost:3000",
        "http://192.168.2.51:3000",
        "http://localhost:5173"
    ],
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    "allow_headers": [
        "Content-Type",
        "Authorization",
        "access-token",
        "Accept",
        "x-session-id",
        "X-Session-Id"
    ],
    "expose_headers": [
        "Authorization",
        "Content-Type",
        "X-Custom-Header",
        "x-session-id",
        "X-Session-Id"
    ]
}}, supports_credentials=True, send_wildcard=False)

api_bp = Blueprint('api', __name__, url_prefix='/api')

api_bp.register_blueprint(user_bp, url_prefix='/user')
api_bp.register_blueprint(patient_bp, url_prefix='/patient')
api_bp.register_blueprint(questions_bp, url_prefix='/questions')

app.register_blueprint(api_bp)

if __name__ == "__main__":
    
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port, debug=True)
