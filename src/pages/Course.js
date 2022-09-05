import React, {useEffect} from "react";
import {useBreadCrumbs} from "../store/bread-crumbs-context";
import useTopics from "../hooks/topics-hook";
import {Link, useParams} from "react-router-dom";

const Course = () => {

    const {changeCrumbs} = useBreadCrumbs();
    const {selectedTopic, setSelectedTopicId} = useTopics();
    const params = useParams();

    useEffect(() => {
        const topicId = params.topicId;
        setSelectedTopicId(topicId);
    }, [params.topicId, setSelectedTopicId])

    useEffect(() => {
        if (!selectedTopic)
            return;
        const crumbs = [{name: selectedTopic.title}]
        changeCrumbs(crumbs);
    }, [changeCrumbs, selectedTopic])

    if (selectedTopic) {
        return (
            <div className="container-fluid">
                <div className="row mt-5 w-75 m-auto">
                    <div className="col-3 d-flex justify-content-around flex-column ">
                        <div>
                            <Link to={`/course/${selectedTopic.id}/lectures`} className="me-4 btn btn-dark px-5">Lectures</Link>
                        </div>
                        <div>
                            <Link to={`/course/${selectedTopic.id}/test-skills`} className="me-4 btn btn-dark px-5">Test your skills</Link>
                        </div>
                    </div>
                    <div className="col-7">
                        <h2>{selectedTopic.title}</h2>
                        <div className="row">
                            <p className="col py-5 text-start">{selectedTopic.description}</p>
                            <div className="col">
                                <img width="400" height="300" src={require(`../images/${selectedTopic.imgName}`)}
                                     alt={selectedTopic.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Course;