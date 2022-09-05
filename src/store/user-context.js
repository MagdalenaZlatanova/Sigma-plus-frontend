import React, {useContext, useState} from "react";

const UserContext = React.createContext({
    username: '',
    userId: 1,
})

const UserContextProvider = (props) => {

    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState(-1);

    const setData = ({username, userId}) => {
        setUsername(username);
        setUserId(userId);
    }

    const clearData = () => {
        setUsername('');
        setUserId(-1);
    }

    const value = {username, userId, setData, clearData};

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context)
        throw new Error("User context used out of provider");

    return context;
}

export default UserContextProvider;