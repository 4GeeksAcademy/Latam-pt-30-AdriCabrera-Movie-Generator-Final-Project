import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">MovieMate</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">Inicio</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Peliculas</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Mi lista</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Recomendaciones</a>
					</li>
				</ul>
				<form className="d-flex" role="search">
					<button className="btn btn-outline-success" type="submit">Inicio de sesion</button>
				</form>
				</div>
			</div>
		</nav>
	);
};
