import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useBreadCrumbs} from "../store/bread-crumbs-context";

const ProblemSolution = () => {

    const params = useParams();
    const {changeCrumbs} = useBreadCrumbs();

    const idx = params.problemIdx;
    const type = params.type

    useEffect(() => {
        let name;
        if (type === 'first')
            name = 'First Midterm'
        else if (type === 'second')
            name = 'Second Midterm'
        else
            name = 'Final';
        changeCrumbs([{name: name, url: `/practice/${type}`}, {name: 'Solution'}]);
    }, [type, changeCrumbs])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <div className="row">
                        <h4><br/></h4>
                    </div>
                    <div className="row">
                        <h3>Проблем {idx}</h3>
                        <p className="text-justify">Пет пиони се распоредуваат случајно на 8 × 8 шаховска табла, така
                            што нема поле на кое се става
                            повеќе од еден пион. Да се определи веројатноста дека нема да има редица или колона со
                            повеќе од еден
                            пион.</p>
                    </div>

                    <h3>Решение</h3>
                    <div className="row">
                        <img src={require("../images/resenie1.png")} alt="Conditional probability"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={require("../images/1.png")} alt="Conditional probability"/>
                            <img src={require("../images/2.png")} alt="Conditional probability"/>
                            <img src={require("../images/3.png")} alt="Conditional probability"/>
                            <img src={require("../images/4.png")} alt="Conditional probability"/>
                            <img src={require("../images/5.png")} alt="Conditional probability"/>
                        </div>
                    </div>
                    <div className="row py-lg-5" />
                </div>
            </div>
        </div>
    )
}

export default ProblemSolution;