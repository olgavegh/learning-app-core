import useAllQuestions from "../hooks/useAllQuestions.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import FilterContainer from "../components/FilterContainer.jsx";
import { useState } from "react"
import AdminQuestionCard from "../components/AdminQuestionCard.jsx";
import AdminQuestionForm from "../components/AdminQuestionForm.jsx";
import { getAllCategories } from "../constants/getAllCategories.js";

export default function AdminPage() {
  const { questions, loading, error, errorMessage } = useAllQuestions();
  const [currentModule, setCurrentModule] = useState("all");

  const filteredQuestions = questions?.filter(q => {
    if (currentModule === "all") return true;
    return q.level === currentModule; // Assuming questions have a 'module' property
  });

  const numQuestion = filteredQuestions?.length


  const handleSubmit = () => {

  }

  return (
    <>
      <TitleContainer
        badgeText="Admin mode"
        descText={`Review all ${numQuestion} assessment questions at your own pace. Mark difficult questions for later review and track your progress.`}
      />

      <AdminQuestionForm onSubmit={() => handleSubmit()} />

      <div className="mx-1 mx-md-5">
        <FilterContainer currentModule={currentModule} setCurrentModule={setCurrentModule} />
        <div className="my-3">

          {
            error ? <div>Error occured: {errorMessage}</div> :
              loading ? <div>Loading...</div> :
                (
                  filteredQuestions?.map((qData) => (
                    (< AdminQuestionCard
                      key={qData.id}
                      question={qData.question}
                      id={qData.id}
                      answer={qData.answer}
                      codesnippet={qData.codesnippet}
                      level={qData.level}
                      category={qData.category}
                    />)))
                )}

        </div>
      </div>
    </>
  )
}
