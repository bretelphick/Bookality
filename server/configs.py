class ApplicationConfigs:
    SECRET_KEY = "thisismynamebret"
    CORS_HEADER = "Content-Type"
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:bret@localhost:5432/Bookality"
    SQLALCHEMY_ECHO = True

    SESSION_TYPE = "filesystem"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
