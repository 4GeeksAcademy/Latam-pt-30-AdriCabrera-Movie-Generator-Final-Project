import React from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const Comment = ({ comment }) => {
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
                            <p className="card-text">{comment.content}</p>
                            <p className="card-text"><small className="text-body-secondary">{comment.create_at}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}