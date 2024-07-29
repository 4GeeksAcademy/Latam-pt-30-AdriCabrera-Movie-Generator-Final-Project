import React, { useContext, useEffect } from "react";
import "../../styles/movies.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../component/Pagination.jsx";

export const Movies = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const isMovieInList = (movieId) => {
        return store.movielist.some(item => item.movie.id === movieId);
    };

    const handleAddOrRemoveMovie = async (movieId, movieTitle) => {
        if (store.user) {
            let success;
            if (isMovieInList(movieId)) {
                success = await actions.deleteMovieFromList(movieId);
            } else {
                success = await actions.createMovieList(movieTitle);
            }
            if (success) {
                await actions.getMovieList();
            }
        } else {
            console.log("User not logged in");
        }
    };

    const totalPages = Math.ceil(180 / store.pageSize12);

    useEffect(() => {
        actions.getMovies(store.currentPage, store.pageSize);
    }, [store.currentPage]);

    const handlePageChange = (page) => {
        actions.getMovies(page, store.pageSize);
        window.scrollTo({
            top: 1,
            behavior: 'smooth' // This will create a smooth scroll effect
        });
    };

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center vw-100 p-3 m-3 gap-2" id="parallax">
                {store.movies.map((movie, index) => (
                    <div style={{ maxWidth: "21rem" }} key={index} className="card card__movie mb-3 d-flex flex-column">
                        <img className="card-img-top" src={movie?.img_url} alt={movie.title} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-light">{movie.title}</h5>
                            <p className="card-text">{movie.description}</p>
                            <div className="mt-auto">
                                <div className="d-flex justify-content-between">
                                    {store.user && (
                                        <div className="tooltip-container">
                                            <button
                                                type="button"
                                                className={`btn ${isMovieInList(movie.id) ? "btn-danger" : "btn-outline-success"}`}
                                                onClick={() => handleAddOrRemoveMovie(movie.id, movie.title)}
                                            >
                                                <i className={`icon fa-solid ${isMovieInList(movie.id) ? "fa-circle-minus" : "fa-circle-plus"}`}></i>
                                            </button>
                                            <span className="tooltip-text">
                                                {isMovieInList(movie.id) ? "Eliminar de Mi lista" : "Agregar a Mi lista"}
                                            </span>
                                        </div>
                                    )}
                                    <div className="tooltip-container">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            onClick={() => navigate(`/SpecificInformation/${movie?.id}`)}
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
            <div className="d-flex justify-content-center">
                <Pagination currentPage={store.currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
};