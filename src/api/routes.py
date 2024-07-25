"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import random
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import Comment, Genre, db, User, Movie
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity
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

@api.route('/signin', methods=['POST'])
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

    return jsonify({"token": token ,"user": user.serialize()}), 201

@api.route('/user/<int:id>', methods=['GET'])
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


@api.route('/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    if len(movies) <1:
        return jsonify({"Message": "No movies exists"}), 404
    serializing = list(map(lambda x: x.serialize(), movies))
    return jsonify(serializing), 200

@api.route('/movies/<int:id>', methods=['GET'])
def get_specific_movies(id):
    movie = Movie.query.get(id)
    if movie is None:
         return jsonify({"Message": "Movie not found"}), 404
    return jsonify(movie.serialize()), 200

@api.route('/popular', methods=['GET'])
def get_popular_movies():
    popular_movies = Movie.query.filter(Movie.rating >= 8).all()
    if not popular_movies:
        return jsonify({"Message": "Nothing to see here"}), 404
    serialized_movies = [movie.serialize() for movie in popular_movies]
    return jsonify(serialized_movies), 200
@api.route('/comments/<int:movie_id>', methods=['GET'])
def get_movie_comments(movie_id):
    movie = Movie.query.get(movie_id)

    serializing = [x.serialize() for x in movie.comments]
    return jsonify(serializing), 200

@api.route('/comments/<int:movie_id>', methods=['POST'])
@jwt_required()
def post_movie_comments(movie_id):
    comment = Comment()
    comment.user_id = get_jwt_identity()
    comment.movie_id = movie_id
    comment.content = request.json['content']

    db.session.add(comment)
    db.session.commit()

    serializing = { 'msg': 'comment created'}
    return jsonify(serializing), 201

@api.route('movies/random/<int:genre_id>', methods=['GET'])
def get_random_movie(genre_id):
    all_movies = None

    if genre_id > 0:
        rand_movie_by_genre = Genre.query.filter_by(id=genre_id).one_or_none()

        if rand_movie_by_genre.movie_genres is None:
            return jsonify({'msg': 'no movies found for selected genre'}), 404
        
        all_movies = [x.movie for x in rand_movie_by_genre.movie_genres] 
    else:
        all_movies = Movie.query.all()


    rand_movie = random.choice(all_movies)
    return jsonify(rand_movie.serialize()), 200