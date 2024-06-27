const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = "";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let readlineSync = require('readline-sync');
  let name1 = readlineSync.question("Please enter your name: ");
  return "Hello ," + name1 + "!";
}
function askQuestion(){
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (i = 0; i < questions.length; i++) {
      let readlineSync = require('readline-sync');
      readlineSync.question(questions[i]);
     } 
}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

if (candidateAnswers === correctAnswers[0],[1],[2],[3],[4]) {
    console.log(`--${correctAnswers[0]} Correct, nice work!\n--${correctAnswers[1]} Correct, nice work!\n--${correctAnswers[2]} Correct, nice work!\n--${correctAnswers[3]} Correct, nice work!\n--${correctAnswers[4]} Correct, nice work!`);
} else {
  console.log("Incorrect Answer!");
}



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  
  // TODO 1.1c: Greet candidate using their name //
console.log(`${askForName()}`);
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