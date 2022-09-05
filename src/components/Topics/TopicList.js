import React, {Fragment} from "react";
import Topic from "./Topic";
import useTopics from "../../hooks/topics-hook";

const TopicList = () => {
    const {topics} = useTopics();

    return (
        <Fragment>
            {topics.map(topic =>
                <Topic
                    key={topic.id}
                    id={topic.id}
                    description={topic.description}
                    title={topic.title}
                    imgName={topic.imgName}
                />
            )}
        </Fragment>
    )
}

export default TopicList;