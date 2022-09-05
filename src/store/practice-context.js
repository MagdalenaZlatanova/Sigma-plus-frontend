import React, {useContext, useState} from "react";

const PracticeContext = React.createContext([])

const PROBLEMS = [
    {
        title: 'Проблем 1',
        question: 'Пет пиони се распоредуваат случајно на 8 × 8 шаховска табла, така што нема поле на кое се става повеќе од еден пион. Да се определи веројатноста дека нема да има редица или колона со повеќе од еден пион.',
        tags: [
            {
                name: 'Combinatorics',
                url: 'https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations#permutation-lib',
            },
            {
                name: 'Independence',
                url: 'https://www.khanacademy.org/math/ap-statistics/probability-ap/stats-conditional-probability/v/testing-independence-from-experimental-data',
            },
        ]
    },
    {
        title: 'Проблем 2',
        question: 'a)Од интервалот [-5,5] на случаен начин се избира еден број m. Да се определи веројатноста дека равенката x 2+mx+4=0 ќе има реални решенија.\n' +
            'б) Нека изборот на број m се повторува 8 пати независно еден од друг. Да се определи веројатноста дека решенијата на претходната равенка ќе бидат реални во повеќе од 2 од изборите.',
        tags: [
            {
                name: 'Random variables',
                url: 'https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library',
            }
        ]
    },
    {
        title: 'Проблем 3',
        question: 'Во група луѓе коишто се тестирани за еден вирус има 6 со негативен тест и 4 со позитивен тест. За проверка на процедурата на тестирање случајно се избираат 3 за повторно тестирање и се сместуваат во чекалната на лабораторијата. Во лабораторијата има две соби за земање на материјал, па затоа од чекалната се избираат случајно двајца и се внесуваат во собите.\n' +
            'а) Колкава е веројатноста дека двајцата внесени во собите за тестирање се со претходен позитивен тест?\n' +
            'б) Ако во избраните двајцата внесени во собите за тестирање се со претходен позитивен тест, колкава е веројатноста дека сите тројца кои се сместени во чекалната се со претходен позитивен тест?',
        tags: [
            {
                name: 'Bayes rule',
                url: 'https://www.khanacademy.org/math/ap-statistics/probability-ap/stats-conditional-probability/v/bayes-theorem-visualized',
            }
        ]
    }
]

const PracticeContextProvider = (props) => {
    const problems = useState(PROBLEMS)[0];

    return <PracticeContext.Provider value={{problems}}>{props.children}</PracticeContext.Provider>
}

export const usePractice = () => {
    const context = useContext(PracticeContext);

    if (!context)
        throw new Error("Practice context used out of provider");

    return context;
}

export default PracticeContextProvider;