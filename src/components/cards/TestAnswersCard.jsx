function TestAnswersCard({ answer, id, randomQuestionId, selectedId, isSelected, isMatch, onClick }) {

    return (
        <>
            {!selectedId ? (
                <div className="d-block border border-2 border-dark p-2 p-md-3 hard-shadow w-100 h-100 position-relative"
                    id={id}
                    onClick={onClick}>
                    {answer.answer}
                </div>
            ) : (
                isSelected ? (
                    <div className="d-block border border-2 border-dark p-2 p-md-3 hard-shadow w-100 h-100 position-relative"
                        id={id}
                        onClick={onClick}
                        style={{ backgroundColor: isMatch ? "green" : "red" }}>
                        {answer.answer}
                    </div>
                ) : (
                    id !== randomQuestionId ? (
                        <div className="d-block border border-2 border-dark p-2 p-md-3 hard-shadow w-100 h-100 position-relative"
                            id={id}
                            onClick={onClick}>
                            {answer.answer}
                        </div>
                    ) : (
                        <div className="d-block border border-2 border-dark p-2 p-md-3 hard-shadow w-100 h-100 position-relative"
                            id={id}
                            onClick={onClick}
                            style={{ backgroundColor: "green"}}>
                            {answer.answer}
                        </div>
                    )
                )

            )}
        </>
    )
}

export default TestAnswersCard;
