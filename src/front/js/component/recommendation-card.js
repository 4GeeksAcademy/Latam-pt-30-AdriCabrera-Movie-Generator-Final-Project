import React from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { ModalMovieDescription } from "./modal-movie-description";

export const RecommendationCard = ({ id }) => {
	const modalId = 'modal' + id;

	return <>
		<div className="card" style={{ width: "18rem" }}>
			<img src={rigoImageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>
					<button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={'#' + modalId}><i className="icon fa-solid fa-circle-chevron-down"></i></button>
				</div>
				<p className="mt-2 fs-6 text-success">97% match</p>
				<span className="badge text-light bg-success">Success</span>
			</div>
		</div>
		<ModalMovieDescription modalId={modalId} type="recommendation" />
	</>
}