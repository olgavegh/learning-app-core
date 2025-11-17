import QuestionList from "../components/QuestionList.jsx";
import useAllQuestions from "../hooks/useAllQuestions.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import FilterContainer from "../components/FilterContainer.jsx";
import { useState } from "react"

export default function StudyPage() {
    const { questions, loading, error, errorMessage, setQuestions } = useAllQuestions();
    const [currentModule, setCurrentModule] = useState("all");

    const filteredQuestions = questions?.filter(q => {
        if (currentModule === "all") return true;
        return q.level === currentModule; // Assuming questions have a 'module' property
    });

    const numQuestion = filteredQuestions?.length

    // const cathegories = [];

    // if(questions){
    //     for (const question of questions) {
    //     if (!cathegories.includes(question.category)) {
    //       cathegories.push(question.category)
    //     }
    //   }
    //   console.log(cathegories)

    // }



    return (
        <>
            <TitleContainer
                badgeText="Study Mode"
                titleText="Master every question with confidence"
                descText={`Review all ${numQuestion} assessment questions at your own pace. Mark difficult questions for later review and track your progress.`}
            />

            <div className="mx-1 mx-md-5">
                <FilterContainer currentModule={currentModule} setCurrentModule={setCurrentModule} />
                <QuestionList useAccordion={true} questions={filteredQuestions} loading={loading} error={error} errorMessage={errorMessage} setQuestions={setQuestions}></QuestionList>
            </div>
        </>
    )
}
