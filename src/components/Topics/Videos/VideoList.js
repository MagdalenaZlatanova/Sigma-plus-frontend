import React from "react";
import Video from "./Video";

const VideoList = ({topicTitle, videos}) => {
    return (
        <div>
            {videos.map((video, idx) =>
                <Video key={idx} {...video} />
            )}
        </div>
    );
}

export default VideoList;