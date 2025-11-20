import useFilteredQuestions from "../hooks/useFilteredQuestions.jsx";
import { HashLoader } from "react-spinners";
import TitleContainer from "../components/layout/TitleContainer.jsx";
import FilterContainer from "../components/FilterContainer.jsx";
import AdminQuestionCard from "../components/cards/AdminQuestionCard.jsx";
import InfoMessage from "../components/InfoMessage.jsx"
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
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
        titleText="Admin DashBoard"
        descText={`Manage and review all assessment questions in one place. Create, edit, or delete questions, filter by category or difficulty, and ensure your quiz content stays up to date and high quality.`}
      />

      <div className="mx-1 mx-md-5">
        <FilterContainer
          currentModule={levelFilter}
          setCurrentModule={setLevelFilter}
          searchTerm={searchFilter}
          setSearchTerm={setSearchFilter}
          isSearchBar={true}
        />

        <div className="my-3">
          <PrimaryButton onClick={() => navigate("/create")}>
            Create new Question
          </PrimaryButton >
          {
            error ? (
              <div>Error occured: {errorMessage}</div>
            ) : loading ? (
              <div className="d-flex flex-column align-items-center justify-content-center min-vh-50 py-5">
                <HashLoader color="#17a2b8" size={80} />
                <p className="mt-3 text-muted">Loading questions...</p>
              </div>
            ) : filteredQuestions?.length === 0 ? (
              <InfoMessage />
            ) : (
              filteredQuestions?.map((qData) => (
                <AdminQuestionCard
                  key={qData.id}
                  question={qData.question}
                  id={qData.id}
                  answer={qData.answer}
                  codesnippet={qData.codesnippet}
                  level={qData.level}
                  category={qData.category}
                  onDelete={deleteQuestion}
                />
              ))
            )
          }
        </div>
      </div>
    </>
  )
}
