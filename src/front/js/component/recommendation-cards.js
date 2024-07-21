import React from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { RecommendationCard } from "./recommendation-card";

export const RecommendationCards = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                {/* esta es la imagen 1 */}
                <div className="carousel-item active">
                    <div className="row row-cols-1 row-cols-md-4">
                        {
                            [1, 2, 3, 4]
                                .map((e, i) =>
                                    <div key={i} className="col">
                                        <RecommendationCard id={e} />
                                    </div>
                                )
                        }
                    </div>
                </div>

                {/* esta es la imagen 2 */}
                <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-md-4">
                        {
                            [5, 6, 7, 8]
                                .map(e =>
                                    <div key={e} className="col">
                                        <RecommendationCard id={e} />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}