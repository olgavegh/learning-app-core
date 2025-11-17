import { useState } from "react";

const AdminQuestionForm = ({ onSubmit }) => {
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [codesnippet, setCodesnippet] = useState("");
  // const [category, setCategory] = useState("");


  const handleSubmit = () => {
    onSubmit({
      question,
      level,
      answer,
      codesnippet
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
          type="text"
          required
          onChange={handleSubmit(setQuestion)}
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
          onChange={handleSubmit(setLevel)}>
          <option value="">--Please choose level--</option>
          <option value={"progbasics"}>Progbasics</option>
          <option value={"web"}>Web</option>
        </select>
        {/* <select
          className="form-control"
          id="category"
          name="category"
          required
          onChange={handleSubmit(setCategory)}>
          <option value="">--Please choose category--</option>
          { categories.map((category) => {
            <option value={category}>{category}</option>
          })

          }
        </select> */}
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
          required
          onChange={handleSubmit(setAnswer)}
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
          required
          onChange={handleSubmit(setCodesnippet)}
        />
      </div>
      
      <div>
        <button type="submit">Add new question</button>
      </div>
    </form>
  );
};

export default AdminQuestionForm;
