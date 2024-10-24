const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const questions = [
    {
        question: "Who was the original founder of the Mishima Zaibatsu in the Tekken video game franchise?",
        answers: ["a) Heihachi Mishima", "b) Jin Kazama", "c) Jinpachi Mishima", "d) Baek Doo San"],
        correct: "c",
    },
    {
        question:"In what year was the first Premier League season held?",
        answers: ["a) 1966", "b) 1992", "c) 1987", "d) 2000"],
        correct: "b",
    },
    {
        question:"Which country has won the most number of FIFA World Cup titles?",
        answers: ["a) Brazil", "b) Germany", "c) Argentina", "d) France"],
        correct: "a",
    },
    {
        question:"Which sportsware brand has the slogan 'Just Do It'?",
        answers: ["a) New Balance", "b) Adidas", "c) Puma", "d) Nike"],
        correct: "d",
    },
    {
        question:"What was the name of the Zimbabwe before independence?",
        answers:["a) Southern Africa", "b) Nyasaland", "c) Rhodesia", "d) Zambia"],
        correct:"c"
    },
    {
        question:"Which gaming console has sold the most units of all time?",
        answers:["a) Xbox 360", "b) Playstion 4", "c) Nintendo Switch", "d) Playstation 2"],
        correct:"d"
    },
    {
        question:"What is the highest grossing film of all time?",
        answers:["a) Titanic", "b) Avatar", "c) Avengers:Endgame", "d) The Dark Knight"],
        correct:"b"
    },
    {
        question:"Which country has the oldest population in the world?",
        answers:["a) South Korea", "b) India", "c) Japan", "d) Italy"],
        correct:"c"
    },
    {
        question:"Who said the quote 'The greatest glory in living lies not in never falling, but in rising every time we fall.'?",
        answers:["a) Martin Luther King Jr.", "b) Nelson Mandela", "c) Albert Einstein", "d) Mother Teresa"],
        correct:"b"
    },
    {
        question:"Which voice actor has been credited of voicing DC superhero The Batman the most?",
        answers:["a) Kevin Conroy", "b) Tom Kenny", "c) John DiMaggio", "d) Robin Williams"],
        correct:"a"
    },  
]

let score = 0
let currentQuestionIndex = 0
let quizTimer
let questionTimer

const askQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
      clearInterval(quizTimer);
      console.log(`\nQuiz Over! You scored: ${score}/${questions.length}`);
      rl.close();
      return;
    }
  
    const questionObj = questions[currentQuestionIndex];
    console.log(`\n${questionObj.question}`);
    questionObj.answers.forEach(answer => console.log(answer));
  
    let timeLeft = 20;
    questionTimer = setInterval(() => {
      timeLeft -= 1;
      process.stdout.write(`\rTime left for question: ${timeLeft}s`);
      if (timeLeft <= 0) {
        clearInterval(questionTimer);
        console.log(`\nTime's up! The correct answer was ${questionObj.correct}. Moving to the next question...\n`);
        currentQuestionIndex++;
        askQuestion();
      }
    }, 1000);
  
    rl.question('\nYour answer (a/b/c/d): ', (answer) => {
      clearInterval(questionTimer);
      if (answer.toLowerCase() === questionObj.correct) {
        console.log('Correct!');
        score++;
      } else {
        console.log(`Wrong! The correct answer was ${questionObj.correct}.`);
      }
      currentQuestionIndex++;
      askQuestion();
    });
  };
  
  const startQuiz = () => {
    console.log('Starting Quiz! You have 100 seconds for the entire quiz.');
    let quizTimeLeft = 100;
  
    quizTimer = setInterval(() => {
      quizTimeLeft -= 1;
      process.stdout.write(`\rTime left for quiz: ${quizTimeLeft}s`);
      if (quizTimeLeft <= 0) {
        clearInterval(quizTimer);
        console.log(`\nQuiz time is over! Your final score is: ${score}/${questions.length}`);
        rl.close();
      }
    }, 1000);
  
    askQuestion();
  };
  
  startQuiz();