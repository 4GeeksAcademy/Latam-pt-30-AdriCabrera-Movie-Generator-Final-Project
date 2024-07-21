import React, { useContext, useEffect } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { ModalMovieDescription } from "./modal-movie-description";
import { Context } from "../store/appContext";

export const RecommendationCard = ({ movie }) => {
	const { actions, store } = useContext(Context)

	const modalId = 'modal' + movie?.id;

	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img src={movie?.img_url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h4>{movie?.title}</h4>
					<div className="d-flex justify-content-between">
						{
							store.user &&
							<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>
						}

						<button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={'#' + modalId}><i className="icon fa-solid fa-circle-chevron-down"></i></button>
					</div>
					<p className="mt-2 fs-6 text-success">{movie?.rating}</p>
				</div>
			</div>
			<ModalMovieDescription modalId={modalId} type="recommendation" />
		</>)
}