import QuestionList from "../components/QuestionList";
import TitleContainer from "../components/layout/TitleContainer"
import useBookmarkedQuestions from "../hooks/useBookmarkedQuestions"

export default function BookmarkedPage() {
  const { questions, loading, error, errorMessage, setQuestions } = useBookmarkedQuestions();

  return (
    <>
      <TitleContainer
        badgeText="Bookmarks"
        titleText="Your Bookmarked Questions"
        descText="Quickly access all the questions you’ve marked for review. Use this page to revisit, study, and manage your favorite or most challenging questions."
      />
      <QuestionList useAccordion={true} questions={questions} loading={loading} error={error} errorMessage={errorMessage} setQuestions={setQuestions}></QuestionList>
    </>
  )
}
