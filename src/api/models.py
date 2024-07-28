from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)

    # Relation with MyList
   
    my_lists = db.relationship('MyList', back_populates='user', lazy=True)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
            # do not serialize the password, its a security breach
        }
    

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), unique=False, nullable=False)
    length = db.Column(db.String(100))
    description = db.Column(db.String(950))
    release_date = db.Column(db.String(50))
    rating = db.Column(db.Float)
    img_url = db.Column(db.String(200))

    # Relationship with MovieGenre
    # Child
    movie_genres = db.relationship('MovieGenre', back_populates='movie', lazy=True)

    # Relationship with MovieDirector
    # Child
    movie_directors = db.relationship('MovieDirector', back_populates='movie', lazy=True)

    # Relation with MovieActor
    # Child
    movie_actors = db.relationship('MovieActor', back_populates='movie', lazy=True)

    # Relation with MyList
    
    my_list = db.relationship('MyList', back_populates='movie', lazy=True )
    
    # Relation with Comments
    comments = db.relationship('Comment', back_populates='movie', lazy=True)

    def __repr__(self):
        return f'<Movie {self.title}>'

    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "length": self.length,
            "description": self.description,
            "release_date": self.release_date,
            "rating": self.rating,
            "img_url": self.img_url,
            "genres": list(map(lambda x: x.genre_serialize(), self.movie_genres)),
            "directors": list(map(lambda x: x.director_serialize(), self.movie_directors)),
            "actors": list(map(lambda x: x.actor_serialize(), self.movie_actors))
        }
    
# My list info
class MyList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    # Relation with Movies
  
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)
    movie = db.relationship('Movie', back_populates='my_list', lazy=True)
    
    # Relation with User
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates='my_lists', lazy=True)

    def __repr__(self):
        return f'<MyList {self.id}'

    def serialize(self):
        return{
            "id": self.id,
            "movie": self.movie.serialize()
        }

# Genres info
class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    genre_name = db.Column(db.String(250))

    # Relationship with MovieGenre
    # Child
    movie_genres = db.relationship('MovieGenre', back_populates='genre', lazy=True)
    
    def __repr__(self):
        return f'<Genre {self.genre_name}'

    def serialize(self):
        return{
            "id": self.id,
            "genre_name": self.genre_name,
        }

# Genres mid table
class MovieGenre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    # Relationship with movie
    # Parent
    movie = db.relationship('Movie', back_populates='movie_genres')
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)
   
    # Relationship with Genre
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'))
    # Parent
    genre = db.relationship('Genre', back_populates='movie_genres')

    def __repr__(self):
        return f'<MovieGenre {self.id}'

    def serialize(self):
        return{
            "id": self.id,
            "genre": self.genre.serialize()
        }
    
    def genre_serialize(self):
        return self.genre.serialize()

# Directors Info
class Director(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300))
    lastname = db.Column(db.String(300))

     # Relationship with MovieDirector
    # Child
    movie_directors = db.relationship('MovieDirector', back_populates='director', lazy=True)

    def __ref__(self):
        return f'<Director {self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname
        }

# Directors mid table
class MovieDirector(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Relationship with movie
    # Parent
    movie = db.relationship('Movie', back_populates='movie_directors')
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)
   
    # Relationship with Director
    director_id = db.Column(db.Integer, db.ForeignKey('director.id'))
    # Parent
    director = db.relationship('Director', back_populates='movie_directors')

    def __repr__(self):
        return f'<MovieDirector {self.id}'

    def serialize(self):
        return{
            "id": self.id,
            "director": self.director.serialize()
        }
    
    def director_serialize(self):
        return self.director.serialize()

# Actors info
class Actor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300))
    lastname = db.Column(db.String(300))

     # Relationship with MovieActor
    # Child
    movie_actors = db.relationship('MovieActor', back_populates='actor', lazy=True)

    def __ref__(self):
        return f'<Actor {self.name}'

    def serialize(self):
        return {
            "actor_id": self.id,
            "name": self.name,
            "lastname": self.lastname
        }

# Actors mid table
class MovieActor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
   # Relationship with movie
    # Parent
    movie = db.relationship('Movie', back_populates='movie_actors')
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)

 # Relationship with Genre
    actor_id = db.Column(db.Integer, db.ForeignKey('actor.id'))
    # Parent
    actor = db.relationship('Actor', back_populates='movie_actors')

    def __repr__(self):
        return f'<MovieActor{self.id}'

    def serialize(self):
        return{
            "id": self.id,
            "director": self.actor.serialize(),
            "actor": self.actor.serialize()
        }

    def actor_serialize(self):
        return self.actor.serialize()
    
            
    
# Comments
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User')
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)
    movie = db.relationship('Movie')
    content = db.Column(db.String(200), nullable=False)
    create_at = db.Column(db.DateTime, default=datetime.now)

    def __ref__(self):
        return f'<Comment {self.content}'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "movie_id": self.movie_id,
            "content": self.content,
            "create_at": str(self.create_at),
            "user": self.user.serialize()
        }
