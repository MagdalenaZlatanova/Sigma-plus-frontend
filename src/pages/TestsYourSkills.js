import React, {useEffect} from "react";
import ProgressBar from "../components/UI/ProgressBar/ProgressBar";
import Problem from "../components/Problem/Problem";
import {useBreadCrumbs} from "../store/bread-crumbs-context";
import {useParams} from "react-router-dom";
import useTopics from "../hooks/topics-hook";
import useProgress from "../hooks/progress-hook";

const TestsYourSkills = () => {

    const {changeCrumbs} = useBreadCrumbs();
    const params = useParams();
    const {setSelectedTopicId, selectedTopic} = useTopics();
    const {selectedProgress, setSelectedProgressId} = useProgress();

    let problems;
    let percent = 0;
    if (selectedTopic && selectedProgress) {
        problems = selectedTopic.problems.map(problem => ({status: 'not-opened'}))
        Object.keys(selectedProgress.openedProblems).forEach(idx => {
            problems[+idx].status = 'opened';
        })
        Object.keys(selectedProgress.solvedProblems).forEach(idx => {
            percent += 1;
            problems[+idx].status = 'solved';
        })
        percent = Math.trunc((percent / problems.length)*100)
    }

    useEffect(() => {
        const topicId = params.topicId;
        setSelectedTopicId(topicId);
        setSelectedProgressId(topicId);
    }, [params.topicId, setSelectedTopicId, setSelectedProgressId])


    useEffect(() => {
        if (!selectedTopic)
            return;

        const crumbs = [{name: selectedTopic.title, url: `/course/${selectedTopic.id}`}, {name: 'Test-skills'}]
        changeCrumbs(crumbs)
    }, [changeCrumbs, selectedTopic])

    if (selectedProgress && selectedTopic) {
        return (
            <div className="container-fluid text-center">
                <h2>{selectedTopic.title}</h2>
                <ProgressBar percent={percent}/>
                {problems.map((problem, idx) =>
                    <Problem key={idx} topicId={selectedTopic.id} status={problem.status} idx={idx+1}/>
                )}
            </div>
        )
    }
}

export default TestsYourSkills;