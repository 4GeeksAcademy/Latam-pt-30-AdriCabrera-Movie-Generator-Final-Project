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
    

class Movies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), unique=False, nullable=False)
    length = db.Column(db.String(100))
    description = db.Column(db.String(950))
    release_date = db.Column(db.String(100))
    rating_IMBD = db.Column(db.Float)

# # From Genre table
#     genre_id = db.Column(db.Integer, Foreignkey=True)

# From Director table
    # director_id = db.Column(db.Integer, Foreignkey=True)

# From Actors Table
    # casting_id = db.Column(db.Integer, Foreignkey=True)

    def __repr__(self):
        return f'<Movies {self.title}>'

    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            # "genre_id": self.genre,
            "length": self.length,
            "rating": self.rating_IMBD
        }
    
class Genres(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    genre_name = db.Column(db.String(250))
    classification = db.Column(db.String(250))

def __repr__(self):
    return f'<Genres {self.genre_name}'

def serialize(self):
    return{
        "id": self.id,
        "genre_name": self.genre_name,
        "classification": self.classification
    }

class Directors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300))

def __ref__(self):
    return f'<Directors {self.name}'

def serialiaze(self):
    return {
        "id": self.id,
        "name": self.name
    }

class Actors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500))

def __ref__(self):
    return f'<Actors {self.name}'

def serialiaze(self):
    return {
        "id": self.id,
        "name": self.name
    }