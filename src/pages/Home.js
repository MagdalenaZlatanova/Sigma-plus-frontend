import React, {useEffect} from "react";
import TopicList from "../components/Topics/TopicList";
import classes from './Home.module.css'
import {useBreadCrumbs} from "../store/bread-crumbs-context";

const Home = () => {

    const {changeCrumbs} = useBreadCrumbs();

    useEffect(() => {
        const crumbs = []
        changeCrumbs(crumbs)
    }, [changeCrumbs])

    return (
        <div className="container-fluid row">
            <div className="col-3 text-end p-5">
                <h1 className={classes.title}>Topics:</h1>
            </div>
            <div className="col-9 p-5">
                <TopicList />
            </div>
        </div>
    )
}

export default Home;