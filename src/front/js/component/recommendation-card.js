import React, { useContext, useEffect } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { ModalMovieDescription } from "./modal-movie-description";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const RecommendationCard = ({ movie }) => {
	const { actions, store } = useContext(Context)

	const navigate = useNavigate()
	return (
		<>
			<div className="card card__movie" style={{ width: "18rem", height: "100%" }}>
				<img src={movie?.img_url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h4>{movie?.title}</h4>
					<div className="d-flex justify-content-between">
						{
							store.user &&
							<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>
						}

						<button type="button" className="btn btn-outline-success"
							onClick={() => {
								navigate(`/SpecificInformation/${movie?.id}`)
							}}><i className="icon fa-solid fa-circle-chevron-down" >
							</i></button>
					</div>
					<p className="mt-2 fs-6 text-success">{movie?.rating}</p>
				</div>
			</div>
			<ModalMovieDescription modalId={'modal' + movie?.id} movie={movie} type="recommendation" key={movie?.id} />
		</>)
}