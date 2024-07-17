import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/mylist.css";
import { Context } from "../store/appContext";

export const Mylist = () => {
    const { store } = useContext(Context)
    return (
        <div className="d-flex justify-content-center p-3 vw-100 parallax-mylist">
            {store.token ? (
                <div className="container row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={rigoImageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={rigoImageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={rigoImageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={rigoImageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-5 alert alert-success text-center h-25" role="alert">
                    Usuario no autenticado
                    <br />
                    INICIA SESIÓN PARA ACCEDER A TU LISTA PERSONALIZADA
                </div>
            )}
        </div>
    );
};