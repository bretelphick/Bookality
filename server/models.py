from app import db
from uuid import uuid4


def get_uuid():
    return uuid4().hex


# USER MODEL
class User(db.Model):
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(120), unique=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.Text, nullable=False, unique=True)

    def __init__(self, username, email, password):
        self.email = email
        self.username = username
        self.password = password

    def __repr__(self):
        return "<User %r>" % self.username


# BOOK REVIEW MODEL
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False)
    review = db.Column(db.String(240), nullable=False)
    book = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(50), nullable=False)

    def __init__(self, username, review, book, location):
        self.username = username
        self.review = review
        self.book = book
        self.location = location

    def __repr__(self):
        return "<User %r>" % self.username
