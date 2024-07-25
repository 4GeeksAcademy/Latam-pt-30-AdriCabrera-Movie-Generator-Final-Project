import React, { useContext, useEffect, useState } from "react";
import { Comment } from "./comment";
import { Context } from "../store/appContext";

export const CommentList = ({ movieId }) => {
    const { store, actions } = useContext(Context);
    const [content, setContent] = useState('');
    const [pagination, setPagination] = useState({ page: 1, perPage: 3 })

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

    useEffect(() => {
        actions.getMovieComments(movieId, pagination.page, pagination.perPage);
    }, [pagination])
    return (
        <>
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Agrega un comentario" aria-label="Agrega un comentario" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" onClick={createComment} type="button" id="button-addon2">Comentar</button>
                </div>
                {
                    store.movieComments
                        .map(c => <Comment key={c.id} comment={c} />)
                }
                <div>
                    <button className="btn btn-outline-secondary" onClick={previousPage} type="button" id="button-addon2">anterior</button>
                    <span className="text-white">{pagination.page}</span>
                    <button className="btn btn-outline-secondary" onClick={nextPage} type="button" id="button-addon2">siguiente</button>

                </div>

            </div>
        </>
    )
}