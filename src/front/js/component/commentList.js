import React, { useContext, useEffect, useInsertionEffect, useState } from "react";
import { Comment } from "./comment";
import { Context } from "../store/appContext";

export const CommentList = ({ movieId }) => {
    const { store, actions } = useContext(Context);
    const [content, setContent] = useState('');
    const [pagination, setPagination] = useState({ page: 1, perPage: 3 })
    const [pages, setPages] = useState([])

    useEffect(() => {
        actions.getMovieComments(movieId, pagination.page, pagination.perPage);
    }, [pagination])

    useEffect(() => {
        const numerOfPages = Math.ceil(store.movieTotalComments / pagination.perPage);

        if (numerOfPages == 0) return;

        const newPages = [];
        for (let i = 1; i <= numerOfPages; i++)
            newPages.push(i);
        setPages(newPages);


        if (pagination.page > numerOfPages)
            previousPage()


    }, [store.movieTotalComments])



    const createComment = async () => {
        if (!store.user) {
            alert("Es necesario estar logeado para poder comentar");
            return;
        }
        await actions.createMovieComment(movieId, content);
        setContent('');
        actions.getMovieComments(movieId);
    };

    const previousPage = () => {
        setPagination({ ...pagination, page: --pagination.page })
    }

    const nextPage = () => {
        setPagination({ ...pagination, page: ++pagination.page })
    }


    return (
        <>
            <div className="container">
                <h2 className="text-center">current Page: {pagination.page}</h2>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Agrega un comentario" aria-label="Agrega un comentario" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-success" onClick={createComment} type="button" id="button-addon2">Comentar</button>
                        </div>
                        {
                            store.movieComments
                                .map(c => <Comment key={c.id} comment={c} />)
                        }
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className={`page-item ${pagination.page == 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={previousPage} disabled={pagination.page == 1} >Anterior</button>
                                </li>
                                {
                                    pages.map(p =>
                                        <li key={p} className={`page-item ${pagination.page == p ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => { setPagination({ ...pagination, page: p }) }} >{p}</button>
                                        </li>
                                    )
                                }
                                <li className={`page-item ${pagination.page == pages.length ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={nextPage} disabled={pagination.page == pages.length} >Siguiente</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div >
        </>
    )
}