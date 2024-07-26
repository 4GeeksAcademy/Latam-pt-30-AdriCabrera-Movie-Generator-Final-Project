import React, { useContext, useEffect, useState } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ModalMovieDescription = ({ modalId, type, movie: inputMovie }) => {
    const [movie, setMovie] = useState(inputMovie)
    const { store, actions } = useContext(Context);
    const [selectedCategory, setSelectedCategory] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {

        if (store.randomMovie) {
            setMovie(store.randomMovie);
        }
    }, [store.randomMovie])

    const clickGenerateRandomMovie = async () => {
        await actions.getRandomMovie(selectedCategory);
    };

    const handleCategorySelect = (genreId) => {
        setSelectedCategory(genreId);
        actions.getRandomMovie(genreId);
    };


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
                                    <div className="col-12">
                                        <div className="dropdown">
                                            <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Categoria
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(0)}>Todas las categorias</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(1)}>Animation</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(2)}>Family</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(3)}>Adventure</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(4)}>Comedy</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(5)}>Action</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(6)}>Crime</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(7)}>Thriller</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(8)}>Romance</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(9)}>Science Fiction</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(10)}>Fantasy</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(11)}>Drama</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(12)}>Horror</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(13)}>Mystery</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(14)}>War</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(15)}>TV Movie</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(16)}>Western</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(17)}>History</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect(18)}>Music</a></li>
                                            </ul>
                                        </div>
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
                                                return <img key={actor?.actor_id} data-key={actor?.actor_id} src={rigoImageUrl} className="img-thumbnail" alt={actor.name} title={actor.name} />
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
                            {type == "random" && <div className="d-grid">
                                <button type="button" className="btn btn-outline-success fs-4" onClick={clickGenerateRandomMovie}>Generar otra película aleatoria 🎲</button>
                            </div>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}