import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const RecommendationCard = ({ movie }) => {
	const { actions, store } = useContext(Context)
	const [alertMessage, setAlertMessage] = useState(null)
	const navigate = useNavigate()

	// useEffect(() => {
	// 	actions.getMovieList()
	// }, [])

	const isMovieInList = (movieId) => {
		return store.movielist.some(item => item.movie.id === movieId);
	}

	const handleAddOrRemoveMovie = async () => {
		if (store.user) {
			let success;
			if (isMovieInList(movie.id)) {
				success = await actions.deleteMovieFromList(movie.id);
				setAlertMessage(success ? "Se eliminó la película de tu lista" : "Ups! Hubo un error eliminando película");
			} else {
				success = await actions.createMovieList(movie.title);
				setAlertMessage(success ? "Se agregó la película a tu lista!" : "Ups! Hubo un error agregando película");
			}
			if (success) {
				await actions.getMovieList()
			}

			setTimeout(() => setAlertMessage(null), 2000)
		} else {
			console.log("User not logged in")
		}
	}

	return (
		<>
			<div className="card card__movie" style={{ width: "18rem", height: "100%" }}>
				<img src={movie?.img_url} className="card-img-top" alt="..." />
				<div className="card-body">
					<h4>{movie?.title}</h4>
					<div className="d-flex justify-content-between">
						{
							store.user &&
							<button type="button"
								className={`btn ${isMovieInList(movie.id) ? "btn-danger" : "btn-outline-success"}`}
								onClick={handleAddOrRemoveMovie}
							>
								<i className={`icon fa-solid ${isMovieInList(movie.id) ? "fa-circle-minus" : "fa-circle-plus"}`}></i>
							</button>
						}

						<button type="button" className="btn btn-outline-success"
							onClick={() => {
								navigate(`/SpecificInformation/${movie?.id}`)
							}}><i className="icon fa-solid fa-circle-chevron-down" >
							</i></button>
					</div>
					<p className="mt-2 fs-6 text-success">{movie?.rating}</p>
				</div>
				{alertMessage && (
					<div className="alert alert-info alert-dismissible fade show" role="alert">
						{alertMessage}
						<button type="button" className="btn-close" onClick={() => setAlertMessage(null)} aria-label="Close"></button>
					</div>
				)}
			</div>
		</>)
}