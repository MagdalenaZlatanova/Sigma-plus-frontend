import React, {useCallback, useState} from "react";

export const ProgressContext = React.createContext({
    progress: [],
    openProblem: (topicId, problemIdx) => {},
    solveProblem: (topicId, problemIdx) => {}
});

const ProgressContextProvider = (props) => {
    const [progress, setProgress] = useState([]);

    const changeData = useCallback((newProgress) => {
        const newList = progress.map(p => {
            if (p.topicId !== newProgress.topicId)
                return p;
            else
                return newProgress;
        });

        setProgress(newList);
    }, [progress])

    const value = {
        progress, changeData, setProgress
    }

    return <ProgressContext.Provider value={value}>{props.children}</ProgressContext.Provider>
}

export default ProgressContextProvider;

