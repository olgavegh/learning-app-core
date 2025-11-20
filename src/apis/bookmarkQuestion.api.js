import { auth } from "../firebase";

export default async function updateQuestion(id, bookmark) {
  const currentUser = auth.currentUser;
  const token = currentUser ? await currentUser.getIdToken() : null;
  const url = `https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app/questions/${id}.json${
    token ? `?auth=${token}` : ""
  }`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bookmark }),
  });

  if (!response.ok) {
    throw new Error("Update question failed");
  }

  return response;
}
