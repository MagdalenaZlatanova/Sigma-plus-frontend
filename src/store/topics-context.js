import React, {useState} from "react";

export const TopicsContext = React.createContext([])

const TopicsContextProvider = (props) => {
    const [topics, setTopics] = useState([]);

    return <TopicsContext.Provider value={{topics, setTopics}}>{props.children}</TopicsContext.Provider>
}

export default TopicsContextProvider;