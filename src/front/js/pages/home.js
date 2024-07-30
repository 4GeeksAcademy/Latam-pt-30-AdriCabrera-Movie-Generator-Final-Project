import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ModalMovieDescription } from "../component/modal-movie-description";
import { RecommendationCards } from "../component/recommendation-cards";
import Moviemate_blanco from "../../img/Moviemate_blanco.png";

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
							<h1 className="text-white font-weight-bold" >Explora sin esfuerzo, con
								<img src={Moviemate_blanco} alt="MovieMate" style={{ height: "80px", }} />
								encuentra tu película ideal.
								Deja de buscar y empieza a disfrutar!
							</h1>
							<div className="mt-5">
								<button type="button" className="btn btn-outline-success data" onClick={() => actions.getRandomMovie()} data-bs-toggle="modal" data-bs-target="#exampleModal" >
									<h4 className="font-weight-bold">Generar pelicula aleatoria</h4>
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
