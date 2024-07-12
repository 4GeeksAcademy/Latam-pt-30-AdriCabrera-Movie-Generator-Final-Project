import React from "react";

export const Login = () => {
    return (
        <div className="d-flex justify-content-center vw-100 p-3 m-3">
            <div className="login-container">
                <div className="text-success text-center p-3">
                    <h3>Inicia sesión</h3>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label text-light">Usuario</label>
                        <div className="input">
                            <i className="fa-regular fa-user text-success" />
                            <input
                                type="name"
                                className="form-control custom-form-control"
                                id="exampleInputName"
                                placeholder="Ingresa tu nombre de usuario" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">Correo Electrónico</label>
                        <div className="input">
                            <i className="fa-regular fa-envelope text-success"></i>
                            <input
                                type="email"
                                className="form-control custom-form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ej: moviemate@movies.com" />
                        </div>
                        <div id="emailHelp" className="form-text">Nunca compartiremos tus datos personales con alguien más.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Contraseña</label>
                        <div className="input">
                            <i className="fa-solid fa-lock text-success"></i>
                            <input
                                type="password"
                                className="form-control custom-form-control"
                                id="exampleInputPassword1"
                                placeholder="Ingresa una contraseña" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success container-fluid">Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}