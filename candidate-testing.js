const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers =[
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
]; 
let candidateAnswers = [];

// prompt candidate for their name
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter you name-- ");
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let numCorrect = 0;
  
  for (let i = 0; i < candidateAnswers.length; i++){
    if (correctAnswers[i].toLowerCase() == candidateAnswers[i].toLowerCase()){

      numCorrect++;
    } else {
      console.log(`question ${i+1} Incorrect. Correct answer--${candidateAnswers[i]}`)
      //console.log(candidateAnswers[i] === correctAnswers[i]`\n${candidateAnswers[0]}--Correct!\nIncorrect!--${candidateAnswers[0]}\n${candidateAnswers[1]}--Correct!\nIncorrect!--${candidateAnswers[1]}\n${candidateAnswers[2]}--Correct!\nIncorrect!--${candidateAnswers[2]}\n${candidateAnswers[3]}--Correct!\nIncorrect!--${candidateAnswers[3]}\n${candidateAnswers[4]}--Correct!\nIncorrect!--${candidateAnswers[4]}`);
    }
  }
  return test(numCorrect);
}
function test(numCorrect) {
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score
   grade = ((numCorrect) / (questions.length)) *100;
  console.log("=====================");
  console.log(`Candidate Name-- ${candidateName}`);
  console.log("=====================");
  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    console.log("---------------------");
    console.log(`Your answer-- ${candidateAnswers[i]}`);
    console.log("---------------------");
    console.log(`Correct answer-- ${correctAnswers[i]}`);
    console.log("=====================");
  }
  console.log(`Candidate's score-- ${grade}%\n(${numCorrect} of ${questions.length} Number of questions answered correctly.)`);
  if (grade < 80) {
    console.log("Failed!");
    console.log("=====================");
  } else {
    console.log("Passed!");
    console.log("=====================");
  }
  return grade;
}
console.log("=====================");
function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers); 

}
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};