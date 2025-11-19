async function GetOneQuestionById(id) {
  const data = await fetch(`https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app/questions/${id}.json`)
  const questions = await data.json();
  return questions;
}

export default GetOneQuestionById;