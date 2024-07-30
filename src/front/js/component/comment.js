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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await actions.deleteMovieComment(comment.id);
                await actions.getMovieComments(comment.movie_id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

            }
        });
    };

    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-3 d-flex ">
                        <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" className="img-fluid  rounded-circle" alt="..." />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="card-title text-black">{comment.user.username || comment.user.email}</h6>
                                <div className="d-flex ">
                                    <button className="btn btn-outline-success me-1" onClick={editComment}> {editing ? <i className="fa-solid fa-floppy-disk"></i> : <i className="fa-solid fa-pencil"></i>}</button>
                                    <button className="btn btn-outline-danger" onClick={deleteComment}><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                            {!editing && <p className="card-text">{comment.content}</p>}
                            {editing && <input className="input-group-text" type='text' onChange={(e) => setCommentValue(e.target.value)} value={commentValue} />}
                            <p className="card-text"><small className="text-body-secondary">{moment.utc(comment.create_at).local().fromNow()}</small></p>
                            {store.user?.id == comment.user_id && <>
                            </>}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}