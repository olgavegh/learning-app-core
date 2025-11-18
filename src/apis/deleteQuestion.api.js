export const deleteQuestion = async (id) => {
  const response = await fetch("https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app/questions/" + id + ".json", {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Delete operation failed");
  }

  return response;
};