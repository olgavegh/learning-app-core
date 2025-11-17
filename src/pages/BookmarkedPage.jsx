import QuestionList from "../components/QuestionList";
import useBookmarkedQuestions from "../hooks/useBookmarkedQuestions"

export default function BookmarkedPage() {
  const { questions, loading, error, errorMessage, setQuestions } = useBookmarkedQuestions();

  return (
    <>
    <QuestionList questions={questions} loading={loading} error={error} errorMessage={errorMessage} setQuestions={setQuestions}></QuestionList>
    </>
  )
}
