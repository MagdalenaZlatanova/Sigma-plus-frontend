import {useContext, useEffect, useState} from "react";
import {TopicsContext} from "../store/topics-context";

const useTopics = () => {
    const context = useContext(TopicsContext);

    if (!context)
        throw new Error("Topics context used out of provider")

    const {topics, setTopics} = context;
    const [selectedTopicId, setSelectedTopicId] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);

    useEffect(() => {

        if (!topics)
            return;

        setSelectedTopic(topics.find(topic => +topic.id === +selectedTopicId));
    }, [topics, selectedTopicId])

    return {topics, setTopics, setSelectedTopicId, selectedTopic, selectedTopicId};
}

export default useTopics;