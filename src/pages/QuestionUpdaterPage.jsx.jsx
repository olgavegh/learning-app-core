import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneQuestionById, updateQuestion } from "../src/apis";
import AdminQuestionForm from "../components/AdminQuestionForm";

const QuestionUpdaterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    
    (async () => {
      const data = await getOneQuestionById(id);
      
      setQuestion(data);
      
    })();

  }, [id]);

  const handleUpdateQuestion = async (question) => {
    await updateQuestion(id, question);
    navigate("/admin");
  };

  return (
    <AdminQuestionForm
      question={question}
      onSave={handleUpdateQuestion}
      onCancel={() => navigate("/admin")}
    />
  );
};

export default QuestionUpdaterPage;
