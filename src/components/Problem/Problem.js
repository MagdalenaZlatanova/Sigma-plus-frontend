import React from "react";
import {Link} from "react-router-dom";

const Problem = ({idx, status, topicId}) => {

    let backgroundColor = '';

    if (status === 'solved')
        backgroundColor = '#198754'
    else if (status === 'opened')
        backgroundColor = 'gray'
    else
        backgroundColor = 'lightgray'

    return (
        <div className='my-1'>
            <Link to={`/course/${topicId}/test-skills/${idx}`} className='btn btn-secondary' style={{backgroundColor: backgroundColor, padding: '5px 180px'}}>
                Problem {idx}
            </Link>
        </div>
    )
}

export default Problem;