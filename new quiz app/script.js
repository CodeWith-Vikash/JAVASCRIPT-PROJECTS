// the questions data
let data = [
  {
    serialNo: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    serialNo: 2,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    serialNo: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    serialNo: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Osmium"],
    correctAnswer: "Oxygen",
  },
  {
    serialNo: 5,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    serialNo: 6,
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage",
  },
  {
    serialNo: 7,
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City",
  },
  {
    serialNo: 8,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    serialNo: 9,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    serialNo: 10,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
];

// selectors
const questionEL = document.querySelector(".question p");
const questionNo = document.querySelector(".question b");
const optionsEL = document.querySelector(".options");
const scoreEL = document.querySelector(".score");
const buttonEl = document.querySelector("button");

// showing the current question
let score = 0;
let questno = 0;
function updateQuestion() {
  let currentQuest = data[questno];
  const { serialNo, question, options } = currentQuest;
  questionEL.innerHTML = question;
  questionNo.innerHTML = serialNo;
  optionsEL.innerHTML = options
  .map((item) => `<div class="option">${item}</div>`)
  .join("");
  scoreEL.innerHTML = `score : ${score}`;
}
updateQuestion();

// submit question

buttonEl.addEventListener("click", () => {
  const activeEl = document.querySelector(".active");
  if (activeEl) {
    let currentQuest = data[questno];
    if(questno<9){
      if(activeEl.textContent==currentQuest.correctAnswer){
        score++
        console.log(score);
        scoreEL.innerHTML = `score : ${score}`;
      }
      questno++;
      updateQuestion();
      addoptionevent()
    }else{
      if(activeEl.textContent==currentQuest.correctAnswer){
        score++
        console.log('final score'+score);
      }
      const box=document.querySelector('.box')
      box.innerHTML=`
         <div class="final">
            <h3>Game Over</h3>
            <p>you scored ${score} out of 10</p>
          </div>
        </div>
      `
    }
  } else {
    alert("select an option");
  }
});

// function to select options
function addoptionevent(){
  // select option
const options = document.querySelectorAll(".option");
options.forEach((item, index) =>
  item.addEventListener("click", (e) => {
    options.forEach((element) => {
      element.classList.remove("active");
    });
    item.classList.add("active");
  })
);
}
addoptionevent()
