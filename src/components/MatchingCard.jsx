function MatchingCard({ question, answer, onClick, isSelected, isMatched, isWrong }) {
  return (
    <div
      onClick={onClick}
      className="d-block border border-2 border-dark p-2 p-md-3 hard-shadow w-100 h-100 position-relative"
      style={{
        backgroundColor: isMatched? "green" : isWrong? "red" : isSelected? "lightgreen" : "white",
        
        color: isMatched || isWrong ? "white" : "black",
      }}
    >
      {question ? <h5>{question}</h5> : <p>{answer}</p>}
    </div>
  );
}

export default MatchingCard;
