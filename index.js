const startButton = document.getElementById("startButton");
const buttonsConteiner = document.getElementById("buttonsContainer");
const header = document.getElementById("header");

let pointsCounter = 0;
let questionCounter = 0;


class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

const questions = [
    new Question("2 + 2 * 2", ["13", "8", "6", "12"], "6"),
    new Question("81 * 83 / 191", ["35.198", "35.199", "36.198", "36.199"], "35.198"),
    new Question("This definition `is the use of computers to create, process, store, retrieve, and exchange all kinds of data and information` is for: ", ["Computer science", "Computer", "Programing", "Information technology"], "Information technology"),
    new Question("Artem is bald?", ["yes", "yes", "no", "yes"], "yes"),
];


startButton.addEventListener("click", () => {
    buttonsConteiner.removeChild(startButton);
    nextQuestion();
});

function createNewQuestion(newQuastion) {
    header.innerHTML = newQuastion.questionText;

    const answers = newQuastion.answers;

    for (let i = 0; i < answers.length; i++) {
        const newButton = document.createElement("button");
        newButton.classList.add("answer-button");
        newButton.innerHTML = answers[i];
        newButton.addEventListener("click", () => {
            if (answers[i] === newQuastion.correctAnswer) {
                pointsCounter++;
            }
            buttonsConteiner.innerHTML = "";
            nextQuestion();
        });
        buttonsConteiner.appendChild(newButton);
    }
}

function nextQuestion() {
    

    if (questionCounter != questions.length){
        createNewQuestion(questions[questionCounter]);
    } else {
        finalScreen();   
    }

    questionCounter++;

}

function finalScreen() {
    buttonsConteiner.innerHTML = "";

    header.innerHTML = `Your score is: ${pointsCounter} /${questions.length}`;

    const newButton = document.createElement("button");
        newButton.classList.add("start-button");
        newButton.innerHTML = "Restart Quiz!";
        newButton.addEventListener("click", () => {
            questionCounter = 0;
            pointsCounter = 0;
            buttonsConteiner.innerHTML = "";
            nextQuestion();
        });
        
        buttonsConteiner.appendChild(newButton);
}