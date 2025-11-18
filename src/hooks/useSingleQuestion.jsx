import { useState, useEffect } from "react";
import GetOneQuestionById from "../apis/singleQuestion.api";
import { transformFireBase } from "../utils/helpers";

export default function useSingleQuestion() {
  const [singleQuestion, setSingleQuestion] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    GetOneQuestionById().then((data) => {
      const transformedData = transformFireBase(data)
      setSingleQuestion(transformedData);
      setisLoading(false);
    }).catch(err => setError(err.message))
  }, []);

  return {
    question: singleQuestion,
    setSingleQuestion: setSingleQuestion,
    loading: isLoading,
    error
  };
}
