import React, { useContext, useState } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import moment from 'moment'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const Comment = ({ comment }) => {
    const { store, actions } = useContext(Context);
    const [editing, setEditing] = useState(false);
    const [commentValue, setCommentValue] = useState('');
    const { id } = useParams();

    const editComment = async () => {
        if (editing) {
            if (commentValue == '' || !commentValue) {
                alert('no puedes guardar comentarions vacios');
                return;
            }
            await actions.updateMovieComment(comment.id, commentValue)
            await actions.getMovieComments(id)
            setEditing(false)
        } else {
            setCommentValue(comment.content);
            setEditing(true)
        }
    };

    const deleteComment = async () => {
        const confirmed = confirm("Esta seguro de su accion?");
        if (confirmed) {
            await actions.deleteMovieComment(comment.id);
        }
    };

    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={rigoImageUrl} className="img-fluid  rounded-circle" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{comment.user.username || comment.user.email}</h5>
                            {!editing && <p className="card-text">{comment.content}</p>}
                            {editing && <input type='text' onChange={(e) => setCommentValue(e.target.value)} value={commentValue} />}
                            <p className="card-text"><small className="text-body-secondary">{moment.utc(comment.create_at).local().fromNow()}</small></p>
                            {store.user?.id == comment.user_id && <>
                                <button className="btn btn-primary" onClick={editComment}>{editing ? 'Guardar' : 'Editar'}</button>
                                <button className="btn btn-danger" onClick={deleteComment}>Borrar</button>
                            </>}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}