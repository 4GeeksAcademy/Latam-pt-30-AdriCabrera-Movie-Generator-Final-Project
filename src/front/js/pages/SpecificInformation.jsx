import React, { useContext, useEffect } from "react";
import "./../../styles/specificInformation.css";
import { Context } from "../store/appContext";

export const SpecificInformation = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams(); // Obtener el ID de la URL

    useEffect(() => {
        actions.getSpecificMovie(id);
    }, [id])

    const movie = store.specificMovie;

    if (!movie) {
        return <div>Loading...</div>
    }

    return (
        <React.Fragment>
            <div className="containerSpecificInformation d-flex">
                <div className="poster-container">
                    <img
                        className="imgSpecificInformation"
                        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kkFn3KM47Qq4Wjhd8GuFfe3LX27.jpg"
                        alt="Movie Poster"
                        style={{ maxWidth: "280px", maxHeight: "360px" }}
                    />
                </div>
                <div className="infoContainer">
                    <div className="tituloSpecificInformation d-flex">
                        <h1>{movie.title}</h1>
                        <h1>({movie.age})</h1>
                    </div>
                    <div className="d-flex">
                        <p> - {movie.genre}</p>
                        <p className="DuracionSpecificInformation"> - {movie.length}</p>
                    </div>
                    <div className="d-flex">
                        <div className="circle-container">
                            <div className="circle-text">{movie.rating}%</div>
                        </div>
                        <div className="puntuacion">
                            <p> Puntuación </p>
                            <p> De usuarios</p>
                        </div>
                    </div>
                    <div className="generalInfo">
                        <h4><strong>Vista general</strong></h4>
                        <p>{movie.description}</p>
                    </div>
                    <div>
                        <h6><strong>Director</strong></h6>
                        <p>{movie.director}</p>
                    </div>
                    <div className="people d-flex">
                        <div>
                            <h6><strong>Elenco</strong></h6>
                            <p>{movie.casting}</p>
                        </div>
                        <div>
                            <h6><strong>Elenco</strong></h6>
                            <p>{movie.casting}</p>
                        </div>
                        <div>
                            <h6><strong>Elenco</strong></h6>
                            <p>{movie.casting}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commentsSpecificInformation">
                <h3><strong>Comentarios</strong></h3>
            </div>
        </React.Fragment>
    );
};