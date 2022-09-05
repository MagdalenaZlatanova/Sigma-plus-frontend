import React from "react";
import {useNavigate} from "react-router-dom";

const Modal = ({lectureUrl}) => {

    const navigate = useNavigate()

    const reviewHandler = () => {
        navigate(lectureUrl);
    }

    return(
        <div>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                Hint
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">A hint</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            Check the lectures
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={reviewHandler} className="btn btn-primary" data-dismiss="modal">Review this topic</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;