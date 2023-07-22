const startBtn = document.querySelector("#start-btn");
const questionCard = document.querySelector(".card");

let score = 0;
//add more elements possibly

class Question {
	constructor(list = [], answer = "", number = 1) {
		this.list = list;
		this.answer = answer;
		this.number = number;
		this.myProperty = "this is my static property";
	}
}

const questionOne = new Question(
	["How long have you been working with JavaScript?", "B", "C", "D"],
	"How long have you been working with JavaScript?",
	1,
);

const questionTwo = new Question(["A", "B", "C", "D"], "A", 2);

const questionThree = new Question(["A", "B", "C", "D"], "B", 3);

const questionFour = new Question(["A", "B", "C", "D"], "D", 4);

const questionFive = new Question(["A", "B", "C", "D"], "C", 5);

const questionsArray = [
	questionOne,
	questionTwo,
	questionThree,
	questionFour,
	questionFive,
];
let questionIndex = 0;

const currentQuestion = questionsArray[questionIndex];
console.log(currentQuestion);

function startQuiz() {
	console.log("starting quiz...");
	questionCard.removeAttribute("hidden");
	startBtn.setAttribute("hidden", true);
	getNextQuestion();
}

function checkAnswer(event) {
	console.log("getting answer");
	console.log(event.target);
	event.preventDefault();
	if (event.target.value === currentQuestion.answer) {
		console.log("answer correct!");
		score++;
	}

	if (event.target.value !== currentQuestion.answer) {
		console.log("answer incorrect!");
	}

	questionCard.innerHTML = "";

	if (questionIndex >= 4) {
		console.log("quiz complete!");
	} else {
		getNextQuestion();
	}
}

function getNextQuestion() {
	console.log("getting next question");

	for (let index = 0; index < currentQuestion.list.length; index++) {
		const possibleAnswer = currentQuestion.list[index];
		const answerBtn = document.createElement("button");
		answerBtn.textContent = possibleAnswer;
		answerBtn.value = possibleAnswer;
		answerBtn.id = "question" + currentQuestion.number;
		console.log(possibleAnswer);
		questionCard.appendChild(answerBtn);
		answerBtn.onclick = checkAnswer;
	}
	questionIndex++;
	console.log(questionIndex);
}

function startTimer() {
	setTimeout(() => {
		console.log("start timer");
	}, 10000);
}

startBtn.addEventListener("click", (event) => {
	//event.preventDefault()
	console.log(event.target);
	startQuiz();
});
