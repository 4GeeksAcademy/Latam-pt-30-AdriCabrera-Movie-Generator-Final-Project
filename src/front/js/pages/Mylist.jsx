import React, { useContext } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/mylist.css";
import { Context } from "../store/appContext";

export const Mylist = () => {
    const { store } = useContext(Context)
    return (
        <div className="d-flex justify-content-center p-3 vw-100 parallax-mylist">
            {store.token ? (
                <div class="container row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src={rigoImageUrl} class="card-img-top" alt="..." />
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
                            <img src={rigoImageUrl} class="card-img-top" alt="..." />
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
                            <img src={rigoImageUrl} class="card-img-top" alt="..." />
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
                            <img src={rigoImageUrl} class="card-img-top" alt="..." />
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
            ) : (
                <div className="d-flex justify-content-center align-items-center flex-column"
                    style={{ background: "white", height: "5rem", width: "30rem" }}>
                    <span>Usuario no autenticado</span>
                    <span>INICIE SESIÓN PARA DESBLOQUEAR ESTA FUNCIÓN</span>
                </div>
            )}
        </div>
    );
};