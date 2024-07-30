import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export const Navbar = () => {
	const { actions, store } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container">
				<Link to={"/"} className="navbar-brand" href="#">
					<img src={logo} alt="MovieMate" style={{ height: "50px" }} />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to={"/"} className="nav-link active" aria-current="page" href="#">Inicio</Link>
						</li>
						<li className="nav-item">
							<Link to={"/movies"} className="nav-link" href="#">Peliculas</Link>
						</li>

						<li className="nav-item">
							<Link to={"/mylist"} className="nav-link" href="#">Mi lista</Link>
						</li>


					</ul>
					<form className="d-flex" role="search">
						{store.token ? (
							<>
								<span className="navbar-text text-white me-3">
									<i className="fa-regular fa-user text-success" /> <strong>{store.user.username}</strong>
								</span>
								<button className="btn btn-outline-danger" type="button" onClick={actions.logout}>Cerrar sesión</button>
							</>
						) : (
							<>
								<Link to={"/login"}>
									<button className="btn btn-outline-success mx-3" type="submit">Inicio de sesion</button>
								</Link>
								<Link to={"/signin"}>
									<button className="btn btn-outline-success" type="submit">Crea tu cuenta</button>
								</Link>
							</>
						)}
					</form>
				</div>
			</div>
		</nav>
	);
};