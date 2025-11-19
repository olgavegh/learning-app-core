import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DeleteButton from './DeleteButton';
import { useNavigate } from 'react-router';

function AdminQuestionCard({ id, question, answer, codesnippet, level, category, onDelete }) {

  const navigate = useNavigate()

  return (
    <div className="mb-3">
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
      <button onClick={() => navigate(`/updater/${id}`)}>Update Question</button>
      <DeleteButton onDelete={onDelete} id={id}></DeleteButton>
    </div>
  )
}

export default AdminQuestionCard;
