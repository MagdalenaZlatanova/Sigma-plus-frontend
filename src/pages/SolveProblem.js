import React, {Fragment, useEffect, useState} from "react";
import Modal from "../components/UI/Modal/Modal";
import Pagination from "../components/UI/Pagination/Pagination";
import {useBreadCrumbs} from "../store/bread-crumbs-context";
import useTopics from "../hooks/topics-hook";
import useProgress from "../hooks/progress-hook";
import {useNavigate, useParams} from "react-router-dom";

const SolveProblem = () => {

    const [selected, setSelected] = useState(-1);
    const [message, setMessage] = useState('');
    const {setSelectedTopicId, selectedTopic} = useTopics();
    const {setSelectedProgressId, selectedProgress, openProblem, solveProblem} = useProgress();

    const params = useParams();
    const {changeCrumbs} = useBreadCrumbs();
    const navigate = useNavigate();

    const problemIdx = params.problemIdx;

    let selectedProblem;
    if (selectedTopic && selectedProgress) {
        selectedProblem = {...selectedTopic.problems[problemIdx - 1]}
        if (selectedProgress.solvedProblems[problemIdx - 1])
            selectedProblem.status = 'solved';
        else
            selectedProblem.status = 'opened';
    }

    const pageChangeHandler = (pageIdx) => {
        setMessage('');
        setSelected(-1);
        navigate(`/course/${selectedTopic.id}/test-skills/${pageIdx}`)
    }

    const changeAnswerHandler = (event) => {
        setMessage('');
        setSelected(event.target.value)
    }

    const checkAnswerHandler = (event) => {
        event.preventDefault();

        if (+selectedProblem.correctAnswer === +selected) {
            solveProblem(selectedTopic.id, problemIdx - 1);
            setMessage('CORRECT');
        } else
            setMessage("Not correct");
    }

    useEffect(() => {
        if (!selectedTopic)
            return;

        openProblem(selectedTopic.id, params.problemIdx - 1);
    }, [openProblem, params.problemIdx, selectedTopic,])

    useEffect(() => {
        const topicId = params.topicId;
        setSelectedProgressId(topicId);
        setSelectedTopicId(topicId);
    }, [params.topicId, setSelectedTopicId, setSelectedProgressId])

    useEffect(() => {
        if (!selectedTopic)
            return;

        const crumbs = [
            {name: selectedTopic.title, url: `/course/${selectedTopic.id}`},
            {name: 'Test-skills', url: `/course/${selectedTopic.id}/test-skills`},
            {name: params.problemIdx}
        ]
        changeCrumbs(crumbs)
    }, [changeCrumbs, params.problemIdx, selectedTopic])


    if (selectedTopic && selectedProgress) {
        return (
            <Fragment>
                <div className="row mt-5">
                    <div className="col-2 text-end pe-5">
                        <h2>Problem {problemIdx}:</h2>
                        {selectedProblem.status === 'solved' && <div className="badge bg-success">Solved</div>}
                    </div>
                    <form className="col-10 mb-5" onSubmit={checkAnswerHandler}>
                        <div className="d-flex">
                            <div>
                                <h3>{selectedProblem.question}</h3>
                                {selectedProblem.status !== 'solved' &&
                                selectedProblem.possibleAnswers.map((answer, idx) =>
                                    <div className="form-check" key={idx}>
                                        <input
                                            onChange={changeAnswerHandler}
                                            className="form-check-input"
                                            type='radio'
                                            id={idx}
                                            value={idx}
                                            name='answer'
                                            checked={+selected === idx}/>
                                        <label htmlFor={idx} className="form-check-label">{answer}</label>
                                    </div>
                                )}
                                <p className={message === 'CORRECT' ? 'text-success' : 'text-danger'}>{message}</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between ms-4">
                                {selectedProblem.status !== 'solved' && <Modal lectureUrl={`/course/${selectedTopic.id}/lectures`}/>}
                                {selectedProblem.status !== 'solved' && <input className='btn btn-secondary' type='submit' value='Check'/>}
                            </div>
                        </div>
                    </form>
                    <Pagination onPageChange={pageChangeHandler} currentPage={problemIdx - 1}
                                numPages={selectedTopic.problems.length}/>
                </div>
            </Fragment>
        )
    }
}

export default SolveProblem;