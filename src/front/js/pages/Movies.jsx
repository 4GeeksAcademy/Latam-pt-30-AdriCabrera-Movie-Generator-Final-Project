import React, { useContext, useEffect } from "react";
import "../../styles/movies.css";
import { Context } from "../store/appContext";

export const Movies = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getMovies();
    }, []);

    const movies = Array.isArray(store.movies) ? store.movies : [];

    return (
        <div className="d-flex justify-content-center vw-100 p-3 m-3" id="parallax">
            {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <div key={index} className="card mb-3">
                        <img className="card-img-top" src={movie.image} alt={movie.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No movies available</p>
            )}
        </div>
    );
};