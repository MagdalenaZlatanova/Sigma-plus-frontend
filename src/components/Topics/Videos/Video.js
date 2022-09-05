import React from "react";

const Video = ({url, description}) => {
    return (
        <div className="d-flex my-5">
            <iframe title={url} height="250" src={url} frameBorder="0"
                    allowFullScreen />
            <p className="p-3">{description}</p>
        </div>
    )
}

export default Video;