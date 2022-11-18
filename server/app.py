from flask import Flask
from configs import ApplicationConfigs
from flask_sqlalchemy import SQLAlchemy

app = Flask("__name__")

app.config.from_object(ApplicationConfigs)

db = SQLAlchemy(app)

from models import User

with app.app_context():
    db.create_all()

import views
