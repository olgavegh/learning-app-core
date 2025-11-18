import { createQuestion } from "../apis/createQuestion.api.js";
import AdminQuestionForm from "../components/AdminQuestionForm";
import { useNavigate } from "react-router";

const QuestionCreatorPage = () => {

  const navigate = useNavigate();
  
  const handleSave = async (question) => {
    await createQuestion(question);
    navigate("/admin")
  };

  return (
    <AdminQuestionForm onSave={handleSave} onCancel={() => navigate("/admin")}/>
  );
};

export default QuestionCreatorPage;
