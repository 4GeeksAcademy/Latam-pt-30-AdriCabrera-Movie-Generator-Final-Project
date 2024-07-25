import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const navigate = useNavigate()
    const { actions } = useContext(Context)

    const [emailOrUsername, setEmailOrUsername] = useState("")
    const [password, setPassword] = useState("")


    const handlesubmit = async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe normalmente
        const success = await actions.login(emailOrUsername, password)
        if (success) {
            navigate("/")
        } else {
            console.log("Error al inicar sesion")
        }
    }

    return (
        <div className="d-flex justify-content-center vw-100 p-3 m-3">
            <div className="login-container">
                <div className="text-success text-center p-3">
                    <h3>Inicia sesión</h3>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">Correo Electrónico o Nombre de Usuario</label>
                        <div className="input">
                            <i className="fa-regular fa-user text-success" />
                            <i className="fa-regular fa-envelope text-success"></i>
                            <input
                                type="text"
                                className="form-control custom-form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingresa tu correo o nombre de usuario"
                                value={(emailOrUsername)}
                                onChange={(event) => setEmailOrUsername(event.target.value)}
                            />
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
                                placeholder="Ingresa una contraseña"
                                value={(password)}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success container-fluid">Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}