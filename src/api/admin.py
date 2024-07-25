  
import os
from flask_admin import Admin
from .models import db, User, Movie, Genre, Director, Actor, Comment, MyList
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Movie, db.session))
    admin.add_view(ModelView(Genre, db.session))
    admin.add_view(ModelView(Director, db.session))
    admin.add_view(ModelView(Actor, db.session))
    admin.add_view(ModelView(MyList, db.session))
    admin.add_view(ModelView(Comment, db.session))


    # You can duplicate line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))