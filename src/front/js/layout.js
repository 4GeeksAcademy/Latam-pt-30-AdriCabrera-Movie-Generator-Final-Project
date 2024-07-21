import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";

import { Signin } from "./pages/Signin.jsx";
import { Login } from "./pages/Login.jsx";

import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Movies } from "./pages/Movies.jsx";
import { Mylist } from "./pages/Mylist.jsx";
import { SpecificInformation } from "./pages/SpecificInformation.jsx";
import { Recomended } from "./pages/Recomended.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Signin />} path="/signin" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Movies/>} path="/movies"/>
                        <Route element={<Mylist/>} path="/mylist"/>
                        <Route element={<SpecificInformation />} path="/SpecificInformation"/>
                        <Route element={<Recomended/>} path="/recomended"/>
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
