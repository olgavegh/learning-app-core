import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DeleteButton from '../ui/DeleteButton';
import PrimaryButton from '../ui/PrimaryButton';
import { useNavigate } from 'react-router';

function AdminQuestionCard({ id, question, answer, codesnippet, level, category, onDelete }) {

  const navigate = useNavigate()

  return (
    <div className="m-3 p-4 border border-1 bg-white text-start">
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
      <PrimaryButton onClick={() => navigate(`/updater/${id}`)}>
        Update Question
      </PrimaryButton>
      <DeleteButton onDelete={onDelete} id={id}></DeleteButton>
    </div>
  )
}

export default AdminQuestionCard;
