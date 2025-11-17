export async function getAllCategories (questions){

    const cathegories = [];
  
    for (const question of questions) {
      if (!cathegories.includes(question.category)) {
        cathegories.push(question.category)
      }
    }
    
    return cathegories;
}