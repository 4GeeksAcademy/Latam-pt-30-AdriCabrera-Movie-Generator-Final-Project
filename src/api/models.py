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
    genre = db.Column(db.String(250))
    lenght = db.Column(db.String(100))
    description = db.Column(db.String(950))
    director = db.Column(db.String(300))
    casting = db.Column(db.String(500))
    release_date = db.Column(db.String(100))
    rating = db.Column(db.Integer)

    def __repr__(self):
        return f'<Movies {self.title}>'

    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "genre": self.genre,
            "lenght": self.lenght,
            "rating": self.rating
        }