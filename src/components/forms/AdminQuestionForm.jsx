import { useState } from "react";

const AdminQuestionForm = ({ onSave, questionToUpdate, onCancel, }) => {
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [codesnippet, setCodesnippet] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Data Basics", "Algorithm Basics", "Function Basics", "Built-in Features", "File Basics", "View Basics", "Event Basics", "Design Basics", "JavaScript - Language Specialties", "Git", "Terminal", "Debugging", "Javascript Language Features", "Fetch", "Responsive Design", "Object Oriented Javascript", "Express", "REST and CRUD", "React", "Testing Basics", "Firebase Realtime Database", "Firebase Authentication", "Web Applications"]
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(questionToUpdate){
      return onSave({
        question: e.target.question.value,
        level: e.target.level.value,
        answer: e.target.answer.value,
        codesnippet: e.target.codesnippet.value,
        category: e.target.category.value
      });
    }
    return onSave({
        question,
        level,
        answer,
        codesnippet,
        category
      });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label className="form-label" htmlFor="question">
          Question
        </label>
        <input
          className="form-control"
          id="question"
          name="question"
          defaultValue={questionToUpdate? questionToUpdate.question : null}
          type="textarea"
          required
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="level">
          Level
        </label>
        <select
          className="form-control"
          id="level"
          name="level"
          required
          onChange={(e) => setLevel(e.target.value)}>
          <option value={questionToUpdate? questionToUpdate.level : null}>{questionToUpdate? questionToUpdate.level : "--Please choose level--"}</option>
          <option value={"Progbasics"}>Progbasics</option>
          <option value={"Web"}>Web</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          className="form-control"
          id="category"
          name="category"
          required
          onChange={(e) => setCategory(e.target.value)}>
            <option value={questionToUpdate? questionToUpdate.category : null}>{questionToUpdate? questionToUpdate.category : "--Please choose category--"}</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="answer">
          Answer
        </label>
        <input
          className="form-control"
          id="answer"
          name="answer"
          type="text"
          defaultValue={questionToUpdate? questionToUpdate.answer : null}
          required
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="codesnippet">
          Codesnippet
        </label>
        <input
          className="form-control"
          id="codesnippet"
          name="codesnippet"
          type="text"
          defaultValue={questionToUpdate? questionToUpdate.codesnippet : null}
          required
          onChange={(e) => setCodesnippet(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">{questionToUpdate ? "Update Question" : "Create Question"}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AdminQuestionForm;
