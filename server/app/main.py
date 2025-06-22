from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from app.routers.users import user_bp
from app.services.questions import questions_bp

app = Flask(__name__)

CORS(
    app,
    resources={r"/api/*": {"origins": [
        "http://localhost:3000",
        "http://192.168.2.51:3000",
        "http://localhost:5173"
    ]}},
    supports_credentials=True,
    expose_headers=["Content-Type", "Authorization", "X-Custom-Header"]
)

# Register user_bp directly with the app
app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(questions_bp, url_prefix="/api/questions")

@app.before_request
def handle_options():
    if request.method == "OPTIONS":
        return make_response('', 200)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5001)