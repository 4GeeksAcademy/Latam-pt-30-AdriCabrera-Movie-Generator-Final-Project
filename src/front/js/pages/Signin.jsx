import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/signin.css";
import Swal from 'sweetalert2'

export const Signin = () => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = async (event) => {
        event.preventDefault();
        const newUser = await actions.signin(username, email, password)

        //     
        if (newUser) {
            Swal.fire({
                title: "Cuenta creada!",
                text: "Disfruta de tu proxima peli con MovieMate",
                icon: "success"
            }).then(() => {
                navigate("/login");
            });
        } else {
            console.log("Error!");
        }
    }

    return (
        <div className="d-flex justify-content-center vw-100 p-3 m-3" id="signinparallax" >
            <div className="signin-container">
                <div className="text-success text-center p-3">
                    <h3>Formulario de registro</h3>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label text-light">Usuario</label>
                        <div className="input">
                            <i className="fa-regular fa-user text-success" />
                            <input
                                type="name"
                                className="form-control custom-form-control"
                                id="exampleInputName"
                                placeholder="Ingresa tu nombre de usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
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
                                placeholder="Ej: moviemate@movies.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success container-fluid">Crear cuenta</button>
                </form>
            </div>
        </div>
    )
}