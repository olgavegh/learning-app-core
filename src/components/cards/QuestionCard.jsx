import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function QuestionCard({ id, question, answer, codesnippet, mark, onUpdate }) {

  const handleToggle = () => {
    onUpdate(id, !mark)
  }

  return (
    <div className={id}>
      <h2>{question}</h2>

      <label className="star-container">
        <input
          type="checkbox"
          checked={mark}
          onChange={handleToggle}
        />
        <span className="star"></span>
      </label>

      <p>{answer}</p>

      <div>{codesnippet &&
        <div >
          <SyntaxHighlighter language="javascript" style={docco}>
            {codesnippet.replace(/;/g, ';\n')}
          </SyntaxHighlighter></div>
        }
      </div>
    </div>
  )
}

export default QuestionCard;
