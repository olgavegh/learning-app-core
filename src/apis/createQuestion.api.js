export const createQuestion = async (question) => {
  const response = await fetch("https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app/questions.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...question }),
  });

  if (!response.ok) {
    throw new Error("Create operation failed");
  }

  return await response.json();
};