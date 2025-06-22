# server/app/main.py

import os
import logging

from flask import Flask, Blueprint, jsonify, make_response, request
from flask_cors import CORS

from app.settings import settings
from app.routers.users import user_bp
from app.services.questions import questions_bp
from app.routers.patients import patient_bp

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
logger.info(f"✅ DATABASE_URL: {settings.database_url}")

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": [
                "http://localhost:3000",
                "http://192.168.2.51:3000",
                "http://localhost:5173",
                "https://14af-192-159-180-156.ngrok-free.app"
            ],
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization", "access-token", "Accept"],
            "expose_headers": ["Authorization", "Content-Type", "X-Custom-Header"],
        }
    },
    supports_credentials=True,
    send_wildcard=False
)

# Register user_bp directly with the app
app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(questions_bp, url_prefix="/api/questions")
# Umbrella blueprint
api_bp = Blueprint('api', __name__, url_prefix='/api')

# Mount your sub-blueprints
api_bp.register_blueprint(user_bp, url_prefix='/user')
api_bp.register_blueprint(patient_bp, url_prefix='/patient')

app.register_blueprint(api_bp)

# Run the app (pick up Cloud Run PORT or default to 8080)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
