import React, { useContext, useEffect } from "react";
import "../../styles/mylist.css";
import { Context } from "../store/appContext";
import { RecommendationCard } from "../component/recommendation-card";

export const Mylist = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.getMovieList();

    }, []);

    return (
        <div className="d-flex justify-content-center p-3 vw-100 parallax-mylist">
            {store.token ? (
                store.movielist && store.movielist.length > 0 ? (
                    <div className="container row row-cols-1 row-cols-md-4 g-4">
                        {store.movielist.map((movie, i) => (
                            <div className="col" key={i}>
                                <RecommendationCard movie={movie} />
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