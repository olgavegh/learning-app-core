import fs from "fs";

// ======= 1️⃣ fájlok =======
const progBasicsFile = "ProgB_Workbook.md";
const webFile = "Web_Workbook.md";

// ======= 2️⃣ Feldolgozó függvény a progbasics workbookhoz =======
function parseMarkdown(md, level) {
  const lines = md.split("\n");
  let currentCategory = "";
  let buffer = [];
  const questions = [];

  for (let line of lines) {
    if (line.startsWith("## ")) {
      currentCategory = line.replace("## ", "").trim();
    } else if (line.startsWith("- ")) {
      if (buffer.length > 0) {
        const q = processQuestion(buffer.join("\n"), currentCategory, level);
        if (q) questions.push(q);
        buffer = [];
      }
      buffer.push(line);
    } else {
      buffer.push(line);
    }
  }

  if (buffer.length > 0) {
    const q = processQuestion(buffer.join("\n"), currentCategory, level);
    if (q) questions.push(q);
  }

  return questions;
}

function processQuestion(block, category, level) {
  const lines = block.split("\n");
  const questionLine = lines[0].replace(/^- /, "").trim();
  const rest = lines.slice(1).join("\n");

  const codeMatches = [...rest.matchAll(/```(?:javascript|js)?([\s\S]*?)```/g)];
  let codeSnippets = codeMatches
    .map(m => m[1].trim())
    .join("\n\n");

  codeSnippets = codeSnippets
    .replace(/[\r\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  let answer = rest
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[\r\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!questionLine) return null;

  if (!answer && codeSnippets.length === 0) {
    answer = "Answer is missing...yet!";
  }

  return {
    category,
    question: questionLine,
    answer,
    level,
    codesnippet: codeSnippets,
    bookmark: false,
  };
}

// ======= 4️⃣ Feldolgozás =======
const progBasicsMarkdown = fs.existsSync(progBasicsFile)
  ? fs.readFileSync(progBasicsFile, "utf-8")
  : "";

const webMarkdown = fs.existsSync(webFile)
  ? fs.readFileSync(webFile, "utf-8")
  : "";

const progBasicsQuestions = parseMarkdown(progBasicsMarkdown, "Progbasics");
const webQuestions = parseMarkdown(webMarkdown, "Web");

const allQuestions = [...progBasicsQuestions, ...webQuestions];


async function createData(question) {

  const response = await fetch("https://learning-supp-fb-app-tm-notyet-default-rtdb.europe-west1.firebasedatabase.app/questions.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question, null, 2),
  })

  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Create failed (${response.status})`);
  }
}

for (const question of allQuestions) {
  await createData(question);
}

