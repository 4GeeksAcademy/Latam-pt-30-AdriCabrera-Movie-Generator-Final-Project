import React, { useContext, useEffect, useState } from "react";
import { Comment } from "../component/comment";
import { Context } from "../store/appContext";

export const CommentsP = () => {
    const movieId = 1;

    const { store, actions } = useContext(Context);
    const [content, setContent] = useState('');

    const createComment = async () => {
        await actions.createMovieComment(movieId, content);
        setContent('');
        actions.getMovieComments(movieId);
    }

    useEffect(() => {
        actions.getMovieComments(movieId);
    }, [])
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

            </div>
        </>
    )
}