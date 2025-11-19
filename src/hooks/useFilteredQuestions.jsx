// Hook will manage levelFilter, searchFilter
import { useState, useEffect } from "react";
import useAllQuestions from "./useAllQuestions"


export default function useFilteredQuestions() {
  const { questions, loading, error, errorMessage, setQuestions } = useAllQuestions();

  const [levelFilter, setLevelFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  let filteredQuestions = [];

  if (questions) {
    // apply the filter first
    filteredQuestions = questions.filter(q => {
      if (levelFilter === "All") return true;
      console.log(q.level)
      return (q.level === levelFilter);
    })

    // then apply the search filter
    if (searchFilter.trim()) {
      filteredQuestions = filteredQuestions.filter(
        q => q.question.toLowerCase().includes(searchFilter.toLowerCase())
      )
    }
  }

  return {
    questions: filteredQuestions,
    loading,
    error,
    errorMessage,
    setQuestions,
    levelFilter,
    setLevelFilter,
    searchFilter,
    setSearchFilter,
    filteredCount: filteredQuestions.length
  };
}
