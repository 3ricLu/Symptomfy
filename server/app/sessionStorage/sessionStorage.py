# app/session_store.py

from time import time

SESSION_STORE = {}
SESSION_TIMEOUT = 1800  # 30 minutes

def get_session(session_id):
    session = SESSION_STORE.get(session_id)
    if session and time() - session["timestamp"] < SESSION_TIMEOUT:
        return session["data"]
    return {}

def save_session(session_id, data):
    SESSION_STORE[session_id] = {
        "data": data,
        "timestamp": time()
    }

def clear_session(session_id):
    if session_id in SESSION_STORE:
        del SESSION_STORE[session_id]

def debug_get_all_session():
    return SESSION_STORE
