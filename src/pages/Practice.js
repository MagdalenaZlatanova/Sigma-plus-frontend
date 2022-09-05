import React, {useEffect} from "react";
import {usePractice} from "../store/practice-context";
import {Link, useParams} from "react-router-dom";
import {useBreadCrumbs} from "../store/bread-crumbs-context";

const Practice = () => {

    const {problems} = usePractice();
    const {changeCrumbs} = useBreadCrumbs();

    const type = useParams().type;

    useEffect(() => {
        let name;
        if (type === 'first')
            name = 'First Midterm'
        else if (type === 'second')
            name = 'Second Midterm'
        else
            name = 'Final';
        changeCrumbs([{name: name}]);
    }, [changeCrumbs, type])

    if (problems) {
        return (
            <div className='container mt-5'>
                {problems.map((problem, idx) =>
                    <div key={idx} className="my-5">
                        <div className="row">
                            <h3>{problem.title}</h3>
                            <p className="text-justify">{problem.question}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div className="text me-5" style={{color: "gray", fontStyle: "italic"}}>Tags:</div>
                                {problem.tags.map(tag =>
                                    <div key={tag.name} className="me-3">
                                        <a className="btn btn-secondary"
                                           href={tag.url}
                                           role="button">{tag.name}</a>
                                    </div>
                                )}
                            </div>
                            <div>
                                <Link to={`/practice/${type}/solution/${idx + 1}`} className="btn btn-primary"
                                      role="button">Solution</Link>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Practice;