import React, { useContext, useEffect } from "react";
import "../../styles/movies.css";
import { Context } from "../store/appContext";

export const Movies = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="d-flex flex-wrap justify-content-center vw-100 p-3 m-3" id="parallax">
            {store.movies.map((movie, index) => (
                <div style={{ minWidth: "21 rem" }} key={index} className="card mb-3">
                    <img className="card-img-top" src={movie?.img_url} alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}