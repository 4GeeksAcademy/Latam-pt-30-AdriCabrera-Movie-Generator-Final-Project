import React, { useContext, useEffect } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { RecommendationCard } from "./recommendation-card";
import { Context } from "../store/appContext";

export const RecommendationCards = ({ movie }) => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPopularMovies()
    }, []);
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex flex-row overflow-scroll">
                        {
                            store.popularMovies.map((movie, i) =>
                                <div key={i} className="col">
                                    <RecommendationCard movie={movie} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}