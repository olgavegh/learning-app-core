import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function AdminQuestionCard({ id, question, answer, codesnippet, level, category }) {

  return (
    <div className={id}>
      <h2>{question}</h2>
      <div>Level: {level}</div>
      <div>Category: {category}</div>
      <p>{answer}</p>

      <div>{codesnippet && 
        <div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codesnippet.replace(/;/g, ';\n')}
          </SyntaxHighlighter></div>
        }
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default AdminQuestionCard;
