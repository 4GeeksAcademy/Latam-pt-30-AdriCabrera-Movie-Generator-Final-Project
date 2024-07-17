import React from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Card = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                {/* esta es la imagen 1 */}
                <div className="carousel-item active">
				<div className="row row-cols-1 row-cols-md-4">
					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>
					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>

					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Drama</span>
						</div>
						</div>
					</div>

					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>
                </div>
				</div>
				
				{/* esta es la imagen 2 */}
                <div className="carousel-item">
				<div className="row row-cols-1 row-cols-md-4">
					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>
					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>

					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>

					<div className="col">
						<div className="card" style={{width: "18rem"}}>
					<img src={rigoImageUrl} className="card-img-top" alt="..."/>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-plus"></i></button>	
								<button type="button" className="btn btn-outline-success"><i className="icon fa-solid fa-circle-chevron-down"></i></button>
							</div>
							<p className="mt-2 fs-6 text-success">97% match</p>
							<span className="badge text-light bg-success">Success</span>
						</div>
						</div>
					</div>
					</div>
                </div>
            </div>
        </div>
    )
}