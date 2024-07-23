import React, { useContext, useEffect } from "react";
import "./../../styles/specificInformation.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const SpecificInformation = () => {
    const { actions, store } = useContext(Context);
    const { specificMovie } = store;
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            actions.getMovie(id);
        }
    }, [id]);

    if (!specificMovie) {
        return <p>Cargando información...</p>;
    }

    return (
        <React.Fragment>
            <div className="containerSpecificInformation d-flex">
                <div className="poster-container">
                    <img
                        className="imgSpecificInformation"
                        src={specificMovie?.img_url}
                        alt={specificMovie.title}
                        style={{ maxWidth: "280px", maxHeight: "360px" }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "URL_DE_IMAGEN_DE_RESPALDO"; }}
                    />
                </div>
                <div className="infoContainer">
                    <div className="tituloSpecificInformation d-flex">
                        <h1>{specificMovie.title}</h1>
                        <h1>({specificMovie.release_date})</h1>
                    </div>
                    <div className="genreAndLength d-flex">
                        <div className="d-flex">
                            {specificMovie.genres && specificMovie.genres.length > 0 ? (
                                specificMovie.genres.map((genre, index) => (
                                    <div key={index}>
                                        <p className="genre"> - {genre.genre_name} </p>
                                    </div>
                                ))
                            ) : (
                                <>
                                    <div>
                                        <p>No hay información sobre el genero disponible.</p>
                                    </div>
                                </>
                            )}
                            <p className="DuracionSpecificInformation"> - {specificMovie.length} mins</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="circle-container">
                            <div className="circle-text">{specificMovie.rating}%</div>
                        </div>
                        <div className="puntuacion">
                            <p>Puntuación</p>
                            <p>De usuarios</p>
                        </div>
                    </div>
                    <div className="generalInfo">
                        <h4><strong>Vista general</strong></h4>
                        <p>{specificMovie.description}</p>
                    </div>
                    <div className="director">
                        {specificMovie.directors && specificMovie.directors.length > 0 ? (
                            specificMovie.directors.map((director, index) => (
                                <div key={index}>
                                    <h6><strong>Director</strong></h6>
                                    <p>{director.name}</p>
                                </div>
                            ))
                        ) : (
                            <>
                                <div>
                                    <h6><strong>Director</strong></h6>
                                    <p>No hay información sobre el director disponible.</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="people">
                        {specificMovie.actors && specificMovie.actors.length > 0 ? (
                            specificMovie.actors.slice(0, 5).map((actor, index) => (
                                <div key={index}>
                                    <h6><strong>Elenco</strong></h6>
                                    <p>{actor.name}</p>
                                </div>
                            ))
                        ) : (
                            <>
                                <div>
                                    <h6><strong>Elenco</strong></h6>
                                    <p>No hay información sobre el elenco disponible.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="commentsSpecificInformation">
                <h3><strong>Comentarios</strong></h3>
            </div>
        </React.Fragment>
    );
};