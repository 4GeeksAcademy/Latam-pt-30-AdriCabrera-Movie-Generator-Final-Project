import React from "react";
import "./../../styles/specificInformation.css";

export const SpecificInformation = () => {

    return (
        <React.Fragment>
            <div className="containerSpecificInformation d-flex">
                <div className="poster-container">
                    <img
                        className="imgSpecificInformation"
                        src="http://es.web.img3.acsta.net/pictures/14/02/13/11/08/054573.jpg"
                        alt="Buscando a Nemo"
                        style={{ maxWidth: "280px", maxHeight: "360px" }}
                    />
                </div>
                <div className="infoContainer">
                    <div className="tituloSpecificInformation d-flex">
                        <h1>Buscando a Nemo</h1>
                        <h1>(2003)</h1>
                    </div>
                    <div className="d-flex">
                        <p> - Animada</p>
                        <p className="DuracionSpecificInformation"> - 1h 34m</p>
                    </div>
                    <div className="d-flex">
                        <div className="circle-container">
                            <div className="circle-text">93%</div>
                        </div>
                        <div className="puntuacion">
                            <p>Puntuación</p>
                            <p>De usuarios</p>
                        </div>
                    </div>
                    <div className="generalInfo">
                        <h4><strong>Vista general</strong></h4>
                        <p>La película narra la historia de un pez payaso llamado Marlin que, tras perder a su esposa y casi todos sus hijos en un ataque de barracuda, se vuelve extremadamente protector con su único hijo sobreviviente, Nemo. Cuando Nemo es capturado por un buzo y llevado a una pecera en Sídney, Marlin se embarca en una aventura épica para rescatarlo.</p>
                    </div>
                    <div>
                        <h6><strong>Director</strong></h6>
                        <p>Andrew Stanton</p>
                    </div>
                    <div className="people d-flex">
                        <div>
                            <h6><strong>Elenco</strong></h6>
                            <p>Albert Brooks</p>
                        </div>
                        <div>
                            <h6><strong>Elenco</strong></h6>
                            <p>Ellen DeGeneres</p>
                        </div>
                        <div>
                            <h6><strong>Elenco</strong></h6>
                            <p>Alexander Gould</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commentsSpecificInformation">
                <h3><strong>Comentarios</strong></h3>
            </div>
        </React.Fragment>
    );
};