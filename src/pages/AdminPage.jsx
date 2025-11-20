import useFilteredQuestions from "../hooks/useFilteredQuestions.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import FilterContainer from "../components/FilterContainer.jsx";
import { useState } from "react"
import AdminQuestionCard from "../components/cards/AdminQuestionCard.jsx";
import InfoMessage from "../components/InfoMessage.jsx"
import { useNavigate } from "react-router";

export default function AdminPage() {
  const navigate = useNavigate();

  const {
    questions: filteredQuestions,
    loading,
    error,
    errorMessage,
    setQuestions,
    levelFilter,
    setLevelFilter,
    searchFilter,
    setSearchFilter,
    filteredCount
  } = useFilteredQuestions();

  const deleteQuestion = (id) => {
    alert("Question deleted!")
    setQuestions((questions) =>
      questions.filter((question) => question.id !== id)
    );
  }

  return (
    <>
      <TitleContainer
        badgeText="Admin mode"
        descText={`Review all ${filteredCount} assessment questions at your own pace. Mark difficult questions for later review and track your progress.`}
      />
      <button className="mb-3" onClick={() => navigate("/create")}>Create new Question</button>

      <div className="mx-1 mx-md-5">
        <FilterContainer
          currentModule={levelFilter}
          setCurrentModule={setLevelFilter}
          searchTerm={searchFilter}
          setSearchTerm={setSearchFilter}
          isSearchBar={true}
        />
        <div className="my-3">

          {
            error ? <div>Error occured: {errorMessage}</div> :
              loading ? <div>Loading...</div> :
                filteredQuestions?.length === 0 ? (
                  <InfoMessage />
                ) :
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
                        onDelete={deleteQuestion}
                      />)))
                  )}
        </div>
      </div>
    </>
  )
}
