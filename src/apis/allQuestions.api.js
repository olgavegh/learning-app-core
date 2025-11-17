async function GetAllQuestions() {
  const data = await fetch("https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app/questions.json")
  const questions = await data.json();
  return questions;
}

export default GetAllQuestions;