from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)

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
    release_date = db.Column(db.Integer)
    rating = db.Column(db.Float)

    # Relationship with MovieGenre
    # Child
    movie_genres = db.relationship('MovieGenre', back_populates='movie', lazy=True)

    # Relationship with MovieDirector
    # Child
    movie_directors = db.relationship('MovieDirector', back_populates='movie', lazy=True)

    # Relation with MovieActor
    # Child
    movie_actors = db.relationship('MovieActor', back_populates='movie', lazy=True)

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
            "genres": list(map(lambda x: x.serialize(), self.movie_genres)),
            "directors": list(map(lambda x: x.serialize(), self.movie_directors))
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

    def serialiaze(self):
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

    def serialiaze(self):
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
            "director": self.actor.serialize()
        }