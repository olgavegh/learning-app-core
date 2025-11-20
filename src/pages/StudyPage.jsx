import QuestionList from "../components/QuestionList.jsx";
import useFilteredQuestions from "../hooks/useFilteredQuestions.jsx";
import TitleContainer from "../components/layout/TitleContainer.jsx";
import FilterContainer from "../components/ui/FilterContainer.jsx";


export default function StudyPage() {
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

    return (
        <>

            <TitleContainer
                badgeText="Study Mode"
                titleText="Master every question with confidence"
                descText={`Review all ${filteredCount} assessment questions at your own pace. Mark difficult questions for later review and track your progress.`}
            />

            <div className="mx-1 mx-md-5">
                <FilterContainer
                    currentModule={levelFilter}
                    setCurrentModule={setLevelFilter}
                    searchTerm={searchFilter}
                    setSearchTerm={setSearchFilter}
                    isSearchBar={true}
                />

                <QuestionList
                    useAccordion={true}
                    questions={filteredQuestions}
                    loading={loading}
                    error={error}
                    errorMessage={errorMessage}
                    setQuestions={setQuestions}
                />
            </div>
        </>
    )
}
