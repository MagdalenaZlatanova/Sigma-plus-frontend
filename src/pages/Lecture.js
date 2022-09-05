import React, {useEffect} from "react";
import VideoList from "../components/Topics/Videos/VideoList";
import {useBreadCrumbs} from "../store/bread-crumbs-context";
import {useParams} from "react-router-dom";
import useTopics from "../hooks/topics-hook";

const Lecture = () => {

    const {changeCrumbs} = useBreadCrumbs();
    const params = useParams();
    const {setSelectedTopicId, selectedTopic} = useTopics();

    useEffect(() => {
        const topicId = params.topicId;
        setSelectedTopicId(topicId);
    }, [params.topicId, setSelectedTopicId])

    useEffect(() => {
        if (!selectedTopic)
            return;

        const crumbs = [{name: selectedTopic.title, url: `/course/${selectedTopic.id}`}, {name: 'Lectures'}]
        changeCrumbs(crumbs)
    }, [changeCrumbs, selectedTopic])

    if (selectedTopic) {
        return (
            <div className="container-fluid pt-4">
                <h2 className="text-center">{selectedTopic.title}</h2>
                <div className="w-50 m-auto">
                    <VideoList videos={selectedTopic.videos}/>
                </div>
            </div>
        );
    }
}

export default Lecture;