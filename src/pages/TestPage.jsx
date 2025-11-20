import useAllQuestions from "../hooks/useAllQuestions.jsx";
import TitleContainer from "../components/layout/TitleContainer.jsx";
import FilterContainer from "../components/ui/FilterContainer.jsx";
import TestQCard from "../components/cards/TestQCard.jsx";
import TestAnswersCard from "../components/cards/TestAnswersCard.jsx";
import React, { useCallback, useEffect, useState } from 'react'

function TestPage() {
    const { questions, loading, error, errorMessage } = useAllQuestions();
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [randomAnswerOptions, setRandomAnswerOptions] = useState([]);
    const [currentModule, setCurrentModule] = useState('all');

    const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    const [isMatch, setIsMatch] = useState(null);

    const filteredQuestions = questions?.filter(q => {
        if (currentModule === "all") return true;
        return q.level === currentModule; // Assuming questions have a 'module' property
    });

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const getRandomQuestion = useCallback(() => {
        if (!filteredQuestions) return;

        const randomQIndex = Math.floor(Math.random() * filteredQuestions.length);
        const randomQ = filteredQuestions[randomQIndex];
        //console.log(randomQ);
        setRandomQuestion(randomQ);
    }, [filteredQuestions]);

    const getRandomAnswers = useCallback(() => {
        if (!randomQuestion || !questions) return;

        const randomAnsws = [randomQuestion];
        //console.log(randomAnsws);

        while (randomAnsws.length < 4) {
            const randomAIndex = Math.floor(Math.random() * questions.length);
            const randomA = questions[randomAIndex];

            if (!randomAnsws.includes(randomA)) {
                randomAnsws.push(randomA);
            }
        }
        setRandomAnswerOptions(shuffleArray(randomAnsws));
    }, [questions, randomQuestion]);

    function handleNextClick(event) {
        event.preventDefault();
        setSelectedAnswerId(null)
        setIsMatch(null);
        getRandomQuestion();
    }

    function handleAnswerSelect(event) {

        if (!isMatch) {
            setSelectedAnswerId(event.target.id);
        }
    }

    useEffect(() => {

        if (filteredQuestions) {
            getRandomQuestion();
        }

    }, [filteredQuestions, getRandomQuestion]);

    useEffect(() => {

        if (randomQuestion) {
            getRandomAnswers();
        }
    }, [randomQuestion, getRandomAnswers]);

    useEffect(() => {
        if (!randomQuestion || !randomAnswerOptions || !selectedAnswerId) return;

        function decideMatch() {
            if (selectedAnswerId !== randomQuestion.id) {
                setIsMatch(false);
            } else {
                setIsMatch(true);
            }
        }
        decideMatch()
    }, [randomQuestion, randomAnswerOptions, selectedAnswerId]);
    //console.log(randomQuestion);
    //console.log(randomAnswerOptions);

    return (
        <>
            <TitleContainer
                badgeText="Test Game"
                titleText="The knowledge tester"
                descText={`Find the correct answer option to the question!`}
            />
            <div className="mx-1 mx-md-5">
                <FilterContainer currentModule={currentModule} setCurrentModule={setCurrentModule} />
                <div className="d-flex flex-column gap-3 my-5">
                    {
                        error ? <div>Error occured: {errorMessage}</div> :
                            loading ? <div>Loading...</div> :
                                <TestQCard randomQuestion={randomQuestion.question} />
                    }
                    {
                        error ? <div>Error occured: {errorMessage}</div> :
                            loading ? <div>Loading...</div> :
                                randomAnswerOptions.map((answer, index) => (
                                    <TestAnswersCard
                                        key={index}
                                        id={answer.id}
                                        answer={answer}
                                        isMatch={isMatch}
                                        isSelected={answer.id === selectedAnswerId}
                                        selectedId={selectedAnswerId}
                                        randomQuestionId={randomQuestion.id}
                                        onClick={handleAnswerSelect} />
                                ))
                    }
                </div>
            </div>
            <button onClick={handleNextClick}>Next question</button>
        </>
    )
}

export default TestPage;
