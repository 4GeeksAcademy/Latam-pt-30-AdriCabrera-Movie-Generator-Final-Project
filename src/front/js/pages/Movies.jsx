import React from "react";
import "../../styles/movies.css";

export const Movies = () => {
    return (
        <div className="d-flex justify-content-center vw-100 p-3 m-3" id="parallax">
            <div className="card mb-3">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}