import React, { useContext, useEffect } from "react";
import "../../styles/mylist.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Mylist = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getMovieList();
    }, []);

    const handleRemoveMovie = async (movieId) => {
        const success = await actions.deleteMovieFromList(movieId);
        if (!success) {
            console.error('Failed to remove movie');
        }
    }

    return (
        <div className="d-flex flex-wrap justify-content-center vw-100 p-3 m-3 gap-2 parallax-mylist">
            {store.token ? (
                store.movielist && store.movielist.length > 0 ? (
                    <div className="container row row-cols-1 row-cols-md-4 g-4">
                        {store.movielist.map((movielist) => (
                            <div style={{ minWidth: "25rem" }} key={movielist.id} className="card card__movie mb-3 text-light d-flex flex-column">
                                <img className="card-img-top" src={movielist?.movie.img_url} alt={movielist?.movie.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{movielist?.movie.title}</h5>
                                    <div className="mt-auto">
                                        <div className="d-flex justify-content-between gap-2">
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => handleRemoveMovie(movielist.movie.id)}
                                            >
                                                Eliminar
                                            </button>
                                            <div className="tooltip-container">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success"
                                                    onClick={() => navigate(`/SpecificInformation/${movielist?.movie.id}`)}
                                                >
                                                    <i className="icon fa-solid fa-circle-chevron-down"></i>
                                                </button>
                                                <span className="tooltip-text">Ver detalles de la película</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-info text-center" role="alert">
                        No movies in your list. Start adding some!
                    </div>
                )
            ) : (
                <div className="mt-5 alert alert-success text-center h-25" role="alert">
                    Usuario no autenticado
                    <br />
                    INICIA SESIÓN PARA ACCEDER A TU LISTA PERSONALIZADA
                </div>
            )}
        </div>
    );
};