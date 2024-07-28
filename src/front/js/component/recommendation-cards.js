import React, { useContext, useEffect } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { RecommendationCard } from "./recommendation-card";
import { Context } from "../store/appContext";
import "./../../styles/carousel.css"

export const RecommendationCards = ({ movie }) => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPopularMovies()
    }, []);
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="no-vertical-scroll d-flex flex-row overflow-scroll align-items-stretch">
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