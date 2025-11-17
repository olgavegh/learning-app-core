import useAllQuestions from "../hooks/useAllQuestions.jsx";
import { useEffect, useState } from "react";
import MatchingCard from "../components/MatchingCard.jsx";
import FilterContainer from "../components/FilterContainer.jsx";
import TitleContainer from "../components/TitleContainer.jsx";

export default function MatchingPage() {
  const { questions, loading, error, errorMessage } = useAllQuestions();
  const [randomQuestions, setrandomQuestions] = useState([])
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [currentModule, setCurrentModule] = useState("all");

  const [currentQuestionObj, setcurrentQuestionObj] = useState({});
  const [matchedIds, setMatchedIds] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [wrongPairIds, setWrongPairIds] = useState([]);

  function handleQuestionClick(qData) {
    setcurrentQuestionObj(qData);
    setSelectedQuestionId(qData.id);
  }

  function handleAnswerClick(answerData) {
    if (!currentQuestionObj.id) return;

    if (currentQuestionObj.answer === answerData.answer) {
      setMatchedIds((prev) => [...prev, currentQuestionObj.id, answerData.id]);
      setcurrentQuestionObj({});
      setSelectedQuestionId(null);
    } else {
      setWrongPairIds([currentQuestionObj.id, answerData.id]);

      setTimeout(() => {
        setWrongPairIds([]);
      }, 1000);

      setSelectedQuestionId(null);
      setcurrentQuestionObj({});
    }
  }

  function resetGame() {
    setcurrentQuestionObj({})
    setSelectedQuestionId(null)
    setWrongPairIds([])
    setMatchedIds([])
  }

  const filteredQuestions = questions?.filter(q => {
    if (currentModule === "all") return true;
    return q.level === currentModule;
  });

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {

    if (filteredQuestions) {
      const randomQs = [];
      for (let i = 0; i < 3; i++) {
        let randomQ = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)]
        while (randomQs.includes(randomQ)) {
          randomQ = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)]
        }
        randomQs.push(randomQ)
      }
      setrandomQuestions(randomQs);
      setShuffledAnswers(shuffleArray(randomQs));
    }
  }, [filteredQuestions])

  return (
    < >
      <TitleContainer
        badgeText="Matching game"
        titleText="The matching game"
        descText={`Find the correct pair of the questions!`}
      />

      <div className="mx-1 mx-md-5">
        <FilterContainer currentModule={currentModule} setCurrentModule={setCurrentModule} onClick={() => resetGame()} />


        <div className="d-flex flex-column gap-3 my-5">
          {
            error ? <div>Error occured: {errorMessage}</div> :
              loading ? <div>Loading...</div> :
                randomQuestions?.map((qData) => (
                  <MatchingCard question={qData.question} key={qData.id}
                    onClick={() => handleQuestionClick(qData)}
                    isSelected={selectedQuestionId === qData.id}
                    isMatched={matchedIds.includes(qData.id)}
                    isWrong={wrongPairIds.includes(qData.id)}></MatchingCard>
                ))
          }
          {
            error ? <div>Error occured: {errorMessage}</div> :
              loading ? <div>Loading...</div> :
                shuffledAnswers?.map((qData) => (
                  <MatchingCard
                    answer={qData.answer}
                    key={`answer-${qData.id}`}
                    id={`answer-${qData.id}`}
                    onClick={() => handleAnswerClick({ ...qData, id: `answer-${qData.id}` })}
                    isMatched={matchedIds.includes(`answer-${qData.id}`)}
                    isWrong={wrongPairIds.includes(`answer-${qData.id}`)}></MatchingCard>
                ))
          }
        </div>
      </div>
      <button onClick={() => resetGame()}>Start again</button>
    </>
  )
}
