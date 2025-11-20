import { useState } from "react";
import { deleteQuestion } from "../../apis/deleteQuestion.api";

const DeleteButton = ({ id, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    onDelete(id)
    setLoading(true);
    await deleteQuestion(id);
    setLoading(false);
  };

  return (
    <button
      disabled={loading}
      type="button"
      onClick={handleDelete}
      className="btn bg-white border border-2 border-dark text-dark fw-medium text-center text-nowrap px-4 py-2 neo-shadow"
      style={{
        fontFamily: 'Epilogue, "Epilogue Placeholder", sans-serif',
        fontSize: '1rem',
        letterSpacing: '-0.04em',
        lineHeight: '1.5em',
        transition: 'all 0.15s ease'
      }}>
      {!loading ? "Delete" : "..."}
    </button>
  );
};

export default DeleteButton;
