"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def create_user():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if None in [username, email, password]:
        return jsonify({"message": "username, email and password are required"}), 400

    username_already_exists = db.session.execute(db.select(User).filter_by(username=username)).one_or_none()
    if username_already_exists:
        return jsonify({"message": "invalid credentials"}), 400
    
    email_already_exists = db.session.execute(db.select(User).filter_by(email=email)).one_or_none()
    if email_already_exists:
        return jsonify({"message": "invalid credentials"}), 400
    
    new_user = User(username=username, email=email, password=password)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as error:
        print(error)
        db.session.rollback()
        return jsonify({"message": "DB error"}), 500
    
    return jsonify({"message":"User registered succesfully"}), 200

@api.route('/login', methods=['POST'])
def login_user():
    data = request.json
    email_or_username = data.get("email_or_username")
    password = data.get("password")

    if None in [email_or_username, password]:
        return jsonify({"message": "email or username and password are required"}), 400
    
    user = User.query.filter((User.email == email_or_username) | (User.username == email_or_username)).first()
    
    if user is None or user.password != password:
        return jsonify({"message": "invalid credentials"}), 401
    
    token = create_access_token(identity=user.id)

    return jsonify({"token": token}), 201

@api.route('/user/<int:id>', methods=['get'])
@jwt_required()
def get_user_data(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"message": "User not found"})

    user_data = {
         "id": user.id,
        "email": user.email,
        "username": user.username
    }

    return jsonify(user_data), 200