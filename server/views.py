import json
import bcrypt
from app import app, db
from flask import jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import User
from flask_session import Session
from psycopg2.extras import Json

bcrypt = Bcrypt(app)
Session(app)
CORS(app, supports_credentials=True)

# HOME PAGE ROUTE
@app.route("/")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route("/@me")
def get_current_user():

    user_id = session.get("user_id")

    if user_id is None:
        return jsonify({"error": "unauthorized"}), 401

    user = User.query.filter_by(id=user_id).first()
    return jsonify({"id": user.id, "email": user.email})


# SIGNUP ROUTE
@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    username = request.json["username"]
    password = request.json["password"]

    email_exists = User.query.filter_by(email=email).first() is not None
    username_exists = User.query.filter_by(username=username).first() is not None

    if email_exists:
        return jsonify({"error": "email already in use"}), 409

    if username_exists:
        return jsonify({"error": "username already in use"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
    new_user = User(email=email, username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"id": new_user.id, "email": new_user.email})


@app.route("/login", methods=["POST"])
def login_user():
    params = request.get_json()
    username = params["username"]
    password = params["password"]

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "unauthorized"}), 401

    session["user_id"] = user.id
    #session.modified = True

    return jsonify({"id": user.id, "email": user.email})
    #return {"id": user.id, "email": user.email}
