import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Card } from "../component/card";
import "../../styles/home.css";

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
								<button type="button" className="btn btn-outline-success data" data-bs-toggle="modal" data-bs-target="#exampleModal" >
									<h4>Generar pelicula aleatoria</h4>
								</button>
							</div>
						</div>
					</div>
				</div>
		</div>

		<div class="modal" id="exampleModal"  tabindex="-1">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content text-light bg-dark">
					<div class="modal-header">
						<h5 class="modal-title">Recomiendame una peli</h5>
						<button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
					<nav class="nav nav-pills nav-fill">
						<div className="row">
						<div className="col-12">
							<div class="dropdown">
								<button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									Categoria
								</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Animadas</a></li>
									<li><a class="dropdown-item" href="#">Comedia</a></li>
									<li><a class="dropdown-item" href="#">Drama</a></li>
									<li><a class="dropdown-item" href="#">Terror</a></li>
								</ul>
							</div>
						</div>
							<div className="col mt-2">
								<img src="https://es.web.img3.acsta.net/pictures/14/02/13/11/08/054573.jpg" class="img-fluid" alt="pelicula"/>
							</div>
							<div className="col">
								<h3>Buscando a Nemo</h3>
								<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
									el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que
									se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
									hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
									 quedando esencialmente igual al original.
								</p>
								<h6>Elenco principal</h6>
								<div className="d-flex justify-content-between card__elenco">
									<img src={rigoImageUrl} class="img-thumbnail" alt="personaje"/>
									<img src={rigoImageUrl} class="img-thumbnail" alt="personaje"/>
									<img src={rigoImageUrl} class="img-thumbnail" alt="personaje"/>
								</div>
								<h6 className="mt-2">Puntuacion</h6>
								<div class="card border-success mb-3 w-100">
									<div class="card-header text-light"> TMDB 78%</div>
									<div class="card-body text-success">
										<p class="card-text">Director: Andrew Stanton</p>
										<p class="card-text">Categoria: animacion</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div class="alert alert-warning text-center" role="alert">
								Si deseas una búsqueda más personalizada, <a href="#" class="alert-link">click aquí.</a> 
							</div>
						</div>
					</nav>
					 <div className="d-grid">
						<button type="button" class="btn btn-outline-success fs-4">Generar otra película aleatoria 🎲</button>
					 </div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="col mt-5">
				<h1 className="text-white">Recomendaciones populares</h1>
			</div>
			<Card />
		</div>
		</>
	);
};
