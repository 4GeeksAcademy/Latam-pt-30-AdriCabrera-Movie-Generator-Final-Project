import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ModalMovieDescription } from "../component/modal-movie-description";
import { RecommendationCards } from "../component/recommendation-cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div>
				<div className=" background-container">
				</div>
				<div className="container background-overlay d-flex align-items-center">
					<div className="row">
						<div className="col text-center">
							<h1 className="text-white" >¿Tienes 20 apps de stream pero no sabes que ver?
								Con MovieMate encuentra la película perfecta según tus preferencias personales.
							</h1>
							<div className="mt-5">
								<button type="button" className="btn btn-outline-success data" onClick={() => actions.getRandomMovie()} data-bs-toggle="modal" data-bs-target="#exampleModal" >
									<h4>Generar pelicula aleatoria</h4>
								</button>

							</div>
						</div>
					</div>
				</div>
			</div>

			<ModalMovieDescription modalId="exampleModal" type="random" movie={store.randomMovie} />

			<div className="container">
				<div className="col mt-5">
					<h1 className="text-white">Recomendaciones populares</h1>
				</div>
				<RecommendationCards />
			</div>
		</>
	);
};
