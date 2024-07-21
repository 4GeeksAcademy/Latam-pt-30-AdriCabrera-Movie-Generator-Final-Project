
import click
import requests
from api.models import db, User, Movie, Genre, MovieGenre, Actor, MovieActor, Director, MovieDirector


"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass

    @app.cli.command("create-movies")
    def create_movies():
        for p in range(1, 10, 1):
            insert_movies(p)

    def insert_movies(page, print_screen=False):
        auth = "?api_key=f06315b4a70c6ef0f66d385bd810abb6"
        url = 'https://api.themoviedb.org/3/discover/movie'+auth+'&page='+str(page)
        r = requests.get(url)
        
        movies = r.json()['results']

        for m in movies:
            movie = Movie()
            movie.title = m['title']
            movie.description = m['overview']
            movie.release_date = m['release_date']
            movie.rating = m['vote_average']
            movie.img_url = m['backdrop_path']
            if print_screen:
                print("Title: " + movie.title)
            db.session.add(movie)
            db.session.commit()

            details = requests.get('https://api.themoviedb.org/3/movie/'+str(m['id'])+auth)
            details = details.json()
            movie.length = details['runtime']
            genre_ids = create_genres(details['genres'])
            create_genres_movies(movie.id, genre_ids)


            credits = requests.get('https://api.themoviedb.org/3/movie/'+str(m['id'])+"/credits"+auth)
            credits = credits.json()
            if print_screen:
                print("cast number: " + str(len(credits['cast'])))
            actors = [x for x in credits['cast'] if x['known_for_department'] == 'Acting']
            actor_ids = create_actors(actors)
            create_actors_movies(movie.id, actor_ids)

            if print_screen:
                print("crew number: " + str(len(credits['crew'])))
            directors = [x for x in credits['cast'] if x['known_for_department'] == 'Directing']
            director_ids = create_directors(directors)
            create_directors_movies(movie.id, director_ids)
            if print_screen:
                print('\n')

    def create_genres(genres):
        genre_ids = []
        for g in genres:
            db_genre = Genre.query.filter_by(genre_name=g['name']).one_or_none()
            if db_genre is None:
                genre = Genre(genre_name=g['name'])
                db.session.add(genre)
                db.session.commit()
                genre_ids.append(genre.id)
            else:
                genre_ids.append(db_genre.id)
                
        
        return genre_ids

    def create_genres_movies(movie_id, genre_ids):
        for g_id in genre_ids:
            genre_movie = MovieGenre(movie_id=movie_id, genre_id=g_id)
            db.session.add(genre_movie)
            db.session.commit()

    def create_actors(actors):
        actors_ids = []
        for a in actors:
            db_actor = Actor.query.filter_by(name=a['name']).one_or_none()
            if db_actor is None:
                actor = Actor(name=a['name'])
                db.session.add(actor)
                db.session.commit()
                actors_ids.append(actor.id)
            else:
                actors_ids.append(db_actor.id)
        
        return actors_ids

    def create_actors_movies(movie_id, actors_ids):
        for a_id in actors_ids:
            actor_movie = MovieActor(movie_id=movie_id, actor_id=a_id)
            db.session.add(actor_movie)
            db.session.commit()

    def create_directors(directors):
        director_ids = []
        for d in directors:
            db_director = Director.query.filter_by(name=d['name']).one_or_none()
            if db_director is None:
                director = Director(name=d['name'])
                db.session.add(director)
                db.session.commit()
                director_ids.append(director.id)
            else:
                director_ids.append(db_director.id)
        
        return director_ids

    def create_directors_movies(movie_id, director_ids):
        for d_id in director_ids:
            director_movie = MovieDirector(movie_id=movie_id, director_id=d_id)
            db.session.add(director_movie)
            db.session.commit()
