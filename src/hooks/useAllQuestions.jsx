import { useState, useEffect } from "react";
import GetAllQuestions from "../apis/allQuestions.api";
import { transformFireBase } from "../utils/helpers";

export default function useQuestions() {
  const [questions, setQuestions] = useState(null);
  const [isQuestionsLoading, setQuestionsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    GetAllQuestions().then((data) => {
      const transformedData = transformFireBase(data)
      setQuestions(transformedData);
      setQuestionsLoading(false);

    }).catch(err => setError(err.message))
  }, []);

  return {
    questions: questions,
    setQuestions: setQuestions,
    loading: isQuestionsLoading,
    error
  };
}
