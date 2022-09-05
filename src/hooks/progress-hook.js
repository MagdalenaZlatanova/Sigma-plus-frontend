import {useCallback, useContext, useEffect, useState} from "react";
import {ProgressContext} from "../store/progress-context";
import useTopics from "./topics-hook";
import {useUser} from "../store/user-context";
import useHttp from "./http-hook";

const useProgress = () => {
    const context = useContext(ProgressContext);

    if (!context)
        throw new Error("Progress context used out of context provider");

    const {topics, selectedTopicId, setSelectedTopicId} = useTopics();
    const {progress, setProgress, changeData} = context;
    const {userId} = useUser();
    const {sendOpenProblem, sendSolveProblem} = useHttp();

    const [selectedProgress, setSelectedProgress] = useState(null);

    const openProblem = useCallback(async (topicId, problemIdx) => {
        const data = await sendOpenProblem(topicId, userId, problemIdx);

        changeData(data);
    }, [changeData, sendOpenProblem, userId])

    const solveProblem = useCallback(async (topicId, problemIdx) => {
        const data = await sendSolveProblem(topicId, userId, problemIdx);

        changeData(data);
    }, [changeData, sendSolveProblem, userId])

    useEffect(() => {

        if (!progress)
            return;

        setSelectedProgress(progress.find(p => +p.topicId === +selectedTopicId))
    }, [topics, selectedTopicId, progress])

    return {progress, setProgress, openProblem, solveProblem, selectedProgress, setSelectedProgressId: setSelectedTopicId}
}

export default useProgress;