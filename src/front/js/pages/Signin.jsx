import React from "react";

export const Signin = () => {
    return (
        <div className="container d-flex justify-content-center m-3">
            <div className="signin-container">
                <div className="text-light text-center p-3">
                    <h3>Registration Form</h3>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label text-light">Username</label>
                        <div className="input">
                            <i className="fa-regular fa-user text-light" />
                            <input
                                type="name"
                                className="form-control custom-form-control"
                                id="exampleInputName"
                                placeholder="Enter your username" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <div className="input">
                            <i class="fa-regular fa-envelope text-light"></i>
                            <input
                                type="email"
                                className="form-control custom-form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your email" />
                        </div>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                        <div className="input">
                            <i class="fa-solid fa-lock text-light"></i>
                            <input
                                type="password"
                                className="form-control custom-form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter your password" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary container-fluid">Register</button>
                </form>
            </div>
        </div>
    )
}