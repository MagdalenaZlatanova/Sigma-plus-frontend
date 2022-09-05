import React, {useCallback, useContext, useState} from "react";

const BreadCrumbsContext = React.createContext({
    crumbs: [],
    changeCrumbs: (arr) => {},
})

const BreadCrumbsContextProvider = (props) => {
    const [crumbs, setCrumbs] = useState([]);

    const changeCrumbs = useCallback((arr) => {
        setCrumbs(arr);
    }, [setCrumbs])

    const value = {crumbs, changeCrumbs};

    return <BreadCrumbsContext.Provider value={value}>{props.children}</BreadCrumbsContext.Provider>
}

export const useBreadCrumbs = () => {
    const breadCrumbs = useContext(BreadCrumbsContext);

    if (!breadCrumbs)
        throw new Error("Context called out of provider");

    return breadCrumbs;
}

export default BreadCrumbsContextProvider;