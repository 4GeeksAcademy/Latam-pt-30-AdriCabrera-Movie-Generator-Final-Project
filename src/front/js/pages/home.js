import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div>
		<div className=" background-container">
			</div>
			<div class="container background-overlay d-flex align-items-center">
					<div className="row">
						<div className="col text-center">
							<h1 className="text-white" >¿Tienes 20 apps de stream pero no sabes que ver?
								Con MovieMate encuentra la película perfecta según tus preferencias personales.
							</h1>
							<div className="mt-5">
								<button type="button" class="btn btn-outline-success">
									<h4>Generar pelicula aleatoria</h4>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		<div className="container">
			<div className="col mt-5">
				<h1 className="text-white">Recomendaciones populares</h1>
			</div>

			<div class="row row-cols-1 row-cols-md-4 g-4">
			<div class="col">
				<div class="card h-100">
				<img src={rigoImageUrl} class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">Last updated 3 mins ago</small>
				</div>
				</div>
			</div>
			<div class="col">
				<div class="card h-100">
				<img src={rigoImageUrl} class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">Last updated 3 mins ago</small>
				</div>
				</div>
			</div>
			<div class="col">
				<div class="card h-100">
				<img src={rigoImageUrl} class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">Last updated 3 mins ago</small>
				</div>
				</div>
			</div>
			<div class="col">
				<div class="card h-100">
				<img src={rigoImageUrl} class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">Last updated 3 mins ago</small>
				</div>
				</div>
			</div>
			</div>
		</div>
		
		</>
	);
};
