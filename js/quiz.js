function createQuiz(questions) {
  return {
    questions,
    answers: null,
  }
}

function runQuiz(quiz) {
  const { questions } = quiz;

  quiz.answers = questions.map(askQuestion);

  return quiz;
} 

const questions = [
  createQuestion('Name', 'What\'s your name'),
  createQuestion('Company', 'What\'s your company'),
  createQuestion('Salary', 'Wanna get paid?', ['Yes', 'No'], 'No'),
]

const quiz = createQuiz(questions);


console.log(
  runQuiz(quiz)
);
