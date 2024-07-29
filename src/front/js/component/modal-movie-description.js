import React, { useContext, useEffect, useState } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ModalMovieDescription = ({ modalId, type, movie: inputMovie }) => {
    const [movie, setMovie] = useState(inputMovie)
    const { store, actions } = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [selectedCategoryName, setSelectedCategoryName] = useState("Categoria");
    const [alertMessage, setAlertMessage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        if (store.randomMovie) {
            setMovie(store.randomMovie);
        }
    }, [store.randomMovie])

    const clickGenerateRandomMovie = async () => {
        await actions.getRandomMovie(selectedCategory);
    };

    const handleCategorySelect = (genreId, genreName) => {
        setSelectedCategory(genreId);
        setSelectedCategoryName(genreName);
        actions.getRandomMovie(genreId);
    };

    const handleMovieList = async () => {
        if (store.user && movie) {
            const movielist = Array.isArray(store.movielist) ? store.movielist : []
            const isInList = movielist.some(item => item.movie?.id === movie?.id)

            let success
            if (isInList) {
                success = await actions.deleteMovieFromList(movie.id)
                setAlertMessage(success ? "Película eliminada de tu lista" : "Error al eliminar la película")
            } else {
                success = await actions.createMovieList(movie.title)
                setAlertMessage(success ? "Película agregada a tu lista" : "Error al agregar la película")
            }

            if (success) {
                await actions.getMovieList();
            }

            setTimeout(() => setAlertMessage(null), 1000)
        } else {
            setAlertMessage("Debes iniciar sesión o registrarte para añadir o eliminar películas de tu lista.")
        }
    }

    return (
        <>
            <div className="modal" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}`} >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content text-light bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title">Recomiendame una peli</h5>
                            <button type="button" className="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <nav className="nav nav-pills nav-fill">
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="dropdown me-2">
                                            <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {selectedCategoryName}
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(0, "Todas las categorias")}>Todas las categorias</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(1, "Animation")}>Animation</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(2, "Family")}>Family</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(3, "Adventure")}>Adventure</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(4, "Comedy")}>Comedy</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(5, "Action")}>Action</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(6, "Crime")}>Crime</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(7, "Thriller")}>Thriller</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(8, "Romance")}>Romance</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(9, "Science Fiction")}>Science Fiction</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(10, "Fantasy")}>Fantasy</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(11, "Drama")}>Drama</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(12, "Horror")}>Horror</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(13, "Mystery")}>Mystery</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(14, "War")}>War</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(15, "TV Movie")}>TV Movie</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(16, "Western")}>Western</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(17, "History")}>History</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(18, "Music")}>Music</a></li>
                                            </ul>
                                        </div>
                                        <button
                                            type="button"
                                            className={`btn ${Array.isArray(store.movielist) && store.movielist.some(item => item.movie?.id === movie?.id) ? "btn-danger" : "btn-outline-success"}`}
                                            onClick={handleMovieList}
                                        >
                                            {Array.isArray(store.movielist) && store.movielist.some(item => item.movie?.id === movie?.id) ? "Eliminar de Mi Lista" : "Agregar a Mi Lista"}
                                        </button>
                                    </div>
                                    <div className="col-12 mb-3">
                                        {alertMessage && (
                                            <div className="alert alert-info alert-dismissible fade show" role="alert">
                                                {alertMessage}
                                                <button type="button" className="btn-close" onClick={() => setAlertMessage(null)} aria-label="Close"></button>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col mt-2">
                                        <img src={movie?.img_url} className="img-fluid" alt="pelicula" />
                                    </div>
                                    <div className="col">
                                        <h3>{movie?.title}</h3>
                                        <p>{movie?.description}</p>
                                        <h6>Elenco principal</h6>
                                        <div className="d-flex justify-content-between card__elenco">
                                            {movie && movie?.actors?.slice(0, 3).map(actor => {
                                                return <p key={actor?.actor_id} data-key={actor?.actor_id}>{actor.name}</p>
                                            })}

                                        </div>
                                        <h6 className="mt-2">Puntuacion</h6>
                                        <div className="card border-success mb-3 w-100">
                                            <div className="card-header text-dark fs-6 text"> {movie?.rating}</div>
                                            <div className="card-body text-success">
                                                <p className="card-text">Director:  {movie && movie.directors && movie.directors.length > 0 ? movie.directors[0].name : "No hay información sobre el director disponible."}</p>
                                                <p className="card-text">Categoria: {movie?.genres[0].genre_name} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="alert alert-warning text-center" role="alert">
                                        Si deseas una búsqueda más personalizada, <span style={{ cursor: "pointer" }} className="alert-link" data-bs-dismiss="modal" onClick={() => {
                                            navigate(`/SpecificInformation/${movie?.id}`)
                                        }}>click aquí. </span>
                                    </div>
                                </div>
                            </nav>
                            {type == "random" && (<div className="d-grid">
                                <button type="button" className="btn btn-outline-success fs-4" onClick={clickGenerateRandomMovie}>Generar otra película aleatoria 🎲</button>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}