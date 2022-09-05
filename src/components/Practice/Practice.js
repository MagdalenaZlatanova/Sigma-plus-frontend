import React from "react";
import {Link} from "react-router-dom";

const Practice = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Practice
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/practice/first">First midterm</Link>
                <Link className="dropdown-item" to="/practice/second">Second midterm</Link>
                <Link className="dropdown-item" to="/practice/final">Final</Link>
            </div>
        </div>
    )
}

export default Practice;