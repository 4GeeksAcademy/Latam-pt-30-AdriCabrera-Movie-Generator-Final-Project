import React, { useContext } from "react";
import "./../../styles/specificInformation.css";
import { Context } from "../store/appContext";

export const SpecificInformation = () => {
    const { store } = useContext(Context);
    const { movies } = store;

    if (!movies) {
        return <p>Cargando información...</p>;
    }

    return (
        <React.Fragment>
            <div className="containerSpecificInformation d-flex">
                <div className="poster-container">
                    <img
                        className="imgSpecificInformation"
                        src={movies.img_url}
                        alt={movies.title}
                        style={{ maxWidth: "280px", maxHeight: "360px" }}
                        onError={(e) => { e.target.onerror = null; e.target.src = "URL_DE_IMAGEN_DE_RESPALDO"; }}
                    />
                </div>
                <div className="infoContainer">
                    <div className="tituloSpecificInformation d-flex">
                        <h1>{movies.title}</h1>
                        <h1>({movies.year})</h1>
                    </div>
                    <div className="d-flex">
                        <p> - {movies.genre}</p>
                        <p className="DuracionSpecificInformation"> - {movies.length}</p>
                    </div>
                    <div className="d-flex">
                        <div className="circle-container">
                            <div className="circle-text">{movies.rating}%</div>
                        </div>
                        <div className="puntuacion">
                            <p>Puntuación</p>
                            <p>De usuarios</p>
                        </div>
                    </div>
                    <div className="generalInfo">
                        <h4><strong>Vista general</strong></h4>
                        <p>{movies.description}</p>
                    </div>
                    <div>
                        <h6><strong>Director</strong></h6>
                        <p>{movies.directors}</p>
                    </div>
                    <div className="people d-flex">
                        {movies.actors && movies.actors.length > 0 ? (
                            movies.actors.map((actor, index) => (
                                <div key={index}>
                                    <h6><strong>Elenco</strong></h6>
                                    <p>{actor}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hay información sobre el elenco disponible.</p>
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