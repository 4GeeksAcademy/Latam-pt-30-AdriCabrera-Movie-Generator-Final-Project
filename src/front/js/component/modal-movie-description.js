import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";


export const ModalMovieDescription = ({ modalId, type }) => {

    return (
        <>
            <div className="modal" id={modalId} tabIndex="-1">
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
                                                <li><a className="dropdown-item" href="#">Animadas</a></li>
                                                <li><a className="dropdown-item" href="#">Comedia</a></li>
                                                <li><a className="dropdown-item" href="#">Drama</a></li>
                                                <li><a className="dropdown-item" href="#">Terror</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col mt-2">
                                        <img src="https://es.web.img3.acsta.net/pictures/14/02/13/11/08/054573.jpg" className="img-fluid" alt="pelicula" />
                                    </div>
                                    <div className="col">
                                        <h3>Buscando a Nemo</h3>
                                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                                            el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que
                                            se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                                            hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
                                            quedando esencialmente igual al original.
                                        </p>
                                        <h6>Elenco principal</h6>
                                        <div className="d-flex justify-content-between card__elenco">
                                            <img src={rigoImageUrl} className="img-thumbnail" alt="personaje" />
                                            <img src={rigoImageUrl} className="img-thumbnail" alt="personaje" />
                                            <img src={rigoImageUrl} className="img-thumbnail" alt="personaje" />
                                        </div>
                                        <h6 className="mt-2">Puntuacion</h6>
                                        <div className="card border-success mb-3 w-100">
                                            <div className="card-header text-light"> TMDB 78%</div>
                                            <div className="card-body text-success">
                                                <p className="card-text">Director: Andrew Stanton</p>
                                                <p className="card-text">Categoria: animacion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="alert alert-warning text-center" role="alert">
                                        Si deseas una búsqueda más personalizada, <Link to="/SpecificInformation" className="alert-link">click aquí.</Link>
                                    </div>
                                </div>
                            </nav>
                            {type == "random" && <div className="d-grid">
                                <button type="button" className="btn btn-outline-success fs-4">Generar otra película aleatoria 🎲</button>
                            </div>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}