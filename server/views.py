import json
import bcrypt
from app import app, db
from flask import jsonify, request, session
from flask_bcrypt import Bcrypt
from models import User
from flask_session import Session

bcrypt = Bcrypt(app)
server_session = Session(app)

# HOME PAGE ROUTE
@app.route("/")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route("/@me")
def get_current_user():

    user_id = session.get("user_id")

    if user_id is None:
        return jsonify({"error", "unauthorized"}), 401

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
    username = request.json["username"]
    password = request.json["password"]

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "unauthorized"}), 401

    session["user_id"] = user.id

    return jsonify({"id": user.id, "email": user.email})
