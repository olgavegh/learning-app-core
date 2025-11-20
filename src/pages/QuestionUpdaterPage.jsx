import { useNavigate, useParams } from "react-router-dom";
import { updateQuestion } from "../apis/updateQuestion";
import AdminQuestionForm from "../components/forms/AdminQuestionForm";
import useSingleQuestion from "../hooks/useSingleQuestion";


const QuestionUpdaterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { question, setSingleQuestion } = useSingleQuestion(id);


  const handleUpdateQuestion = async (question) => {
    await updateQuestion(id, question);
    setSingleQuestion(null)
    navigate("/admin");
  };

  return (
    <div className="mb-3">
      <AdminQuestionForm
        questionToUpdate={question}
        onSave={handleUpdateQuestion}
        onCancel={() => {
          setSingleQuestion(null);
          navigate("/admin")
        }}
      />
    </div>
  );
};

export default QuestionUpdaterPage;
