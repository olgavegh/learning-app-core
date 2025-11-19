import { useState, useEffect } from "react";
import GetOneQuestionById from "../apis/singleQuestion.api";

export default function useSingleQuestion(id) {
  const [singleQuestion, setSingleQuestion] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    GetOneQuestionById(id).then((data) => {
      
      setSingleQuestion(data);
      setisLoading(false);
    }).catch(err => setError(err.message))
  }, [id]);

  return {
    question: singleQuestion,
    setSingleQuestion: setSingleQuestion,
    loading: isLoading,
    error
  };
}
