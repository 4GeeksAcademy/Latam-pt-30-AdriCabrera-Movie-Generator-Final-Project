import React, { useContext, useState } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import moment from 'moment'
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'


export const Comment = ({ comment }) => {
    const { store, actions } = useContext(Context);
    const [editing, setEditing] = useState(false);
    const [commentValue, setCommentValue] = useState('');
    const { id } = useParams();

    const editComment = async () => {
        if (editing) {
            if (commentValue == '' || !commentValue) {
                await Swal.fire({
                    title: "Comentarion Invalido",
                    text: "No puedes guardar comentarios vacios",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                });
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
        const result = await Swal.fire({
            title: "Está seguro?",
            text: "No podrás recuperar tu comentario!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, estoy seguro!"
        });

        if (result.isConfirmed) {
            await actions.deleteMovieComment(comment.id);
            await actions.getMovieComments(comment.movie_id);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    };

    return (
        <>
            <div className="card mb-3" >
                <div className="row d-flex flex-column flex-md-row">
                    <div className="col-12 col-lg-3 d-flex ">
                        <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" className="img-fluid  rounded-circle" alt="..." />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card-body">
                            <div className="d-flex flex-column">
                                <h6 className="card-title text-black">{comment.user.username || comment.user.email}</h6>
                            </div>
                            {!editing && <p className="card-text">{comment.content}</p>}
                            {editing && <input className="form-control" type='text' onChange={(e) => setCommentValue(e.target.value)} value={commentValue} />}
                            <p className="card-text"><small className="text-body-secondary">{moment.utc(comment.create_at).local().fromNow()}</small></p>
                            {store.user?.id == comment.user_id && <>
                            </>}
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="d-flex">
                            <button className="btn btn-outline-success me-1" onClick={editComment}> {editing ? <i className="fa-solid fa-floppy-disk"></i> : <i className="fa-solid fa-pencil"></i>}</button>
                            <button className="btn btn-outline-danger" onClick={deleteComment}><i className="fa-solid fa-trash"></i></button>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}