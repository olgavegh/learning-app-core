import { useNavigate, useParams } from "react-router-dom";
import { updateQuestion } from "../apis/updateQuestion";
import AdminQuestionForm from "../components/AdminQuestionForm";
import useSingleQuestion from "../hooks/useSingleQuestion";


const QuestionUpdaterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { question } = useSingleQuestion();


  const handleUpdateQuestion = async (question) => {
    await updateQuestion(id, question);
    navigate("/admin");
  };

  return (
    <AdminQuestionForm
      questionToUpdate={question}
      onSave={handleUpdateQuestion}
      onCancel={() => navigate("/admin")}
    />
  );
};

export default QuestionUpdaterPage;
