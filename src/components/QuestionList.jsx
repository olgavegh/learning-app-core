import bookmarkQuestion from "../apis/bookmarkQuestion.api";
import QuestionCard from "./QuestionCard";
import Accordion from "./Accordion";
import InfoMessage from "./InfoMessage"

function QuestionList({ questions, loading, error, errorMessage, setQuestions, useAccordion }) {

  const updateBookmark = async (id, bookmark) => {
    try {
      await bookmarkQuestion(id, bookmark)

      setQuestions((current) =>
        current.map((question) => {
          if (question.id !== id) {
            return question;
          }
          return {
            ...question,
            bookmark,
          }
        })
      )
    } catch (err) {
      console.error(err)
    }


  }

  return (
    <div className="my-3">

      {
        error ? <div>Error occured: {errorMessage}</div> :
          loading ? <div>Loading...</div> :
            questions?.length === 0 ? (
              <InfoMessage />
            ) :
              useAccordion ? (
                <div className="accordion accordion-flush my-4" id="accordionList">
                  {questions?.map((qData) => (
                    (<Accordion
                      key={qData.id}
                      id={qData.id} parentId="accordionList"
                      question={qData.question}
                      answer={qData.answer}
                      codesnippet={qData.codesnippet}
                      mark={qData.bookmark}
                      onUpdate={updateBookmark} />)))}
                </div>


              ) : (
                questions?.map((qData) => (
                  (< QuestionCard
                    key={qData.id}
                    question={qData.question}
                    id={qData.id}
                    answer={qData.answer}
                    codesnippet={qData.codesnippet}
                    mark={qData.bookmark}
                    onUpdate={updateBookmark}
                  />)))
              )
      }
    </div>
  );
}

export default QuestionList