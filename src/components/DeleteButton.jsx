import { useState } from "react";
import { deleteQuestion } from "../apis/deleteQuestion.api";

const DeleteButton = ({ id, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    onDelete(id)
    setLoading(true);
    await deleteQuestion(id);
    setLoading(false);
  };

  return (
    <button disabled={loading} type="button" onClick={handleDelete}>
      {!loading ? "Delete" : "..."}
    </button>
  );
};

export default DeleteButton;
