import React, { useContext, useEffect } from "react";
import "../../styles/movies.css";
import { Context } from "../store/appContext";
import { Pagination } from "../component/Pagination.jsx";

export const Movies = () => {
    const { store, actions } = useContext(Context)
    const totalPages = Math.ceil(180 / store.pageSize12)

    useEffect(() => {
        actions.getMovies(store.currentPage, store.pageSize);
    }, [store.currentPage]);

    const handlePageChange = (page) => {
        actions.getMovies(page, store.pageSize);
        window.scrollTo({
            top: 1,
            behavior: 'smooth' // This will create a smooth scroll effect
        });
    };


    return (
        <>
            <div className="d-flex flex-wrap justify-content-center vw-100 p-3 m-3 gap-2" id="parallax">
                {store.movies.map((movie, index) => (
                    <div style={{ maxWidth: "21rem" }} key={index} className="card mb-3">
                        <img className="card-img-top" src={movie?.img_url} alt={movie.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center bg-succes">
                <Pagination currentPage={store.currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    )
}