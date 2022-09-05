import React from "react";
import {Link} from "react-router-dom";

const Topic = ({id, title, description, imgName}) => {
    return (
        <div className="row py-3 border-bottom">
            <div className="col d-flex flex-column justify-content-around">
                <h4>{title}</h4>
                <p>{description}</p>
                <p>
                    <Link to={`/course/${id}`} className="btn btn-secondary">Open</Link>
                </p>
            </div>
            <div className="col">
                <img src={require(`../../images/${imgName}`)} width="400" height="300" alt={title}/>
            </div>
        </div>
    );
}

export default Topic