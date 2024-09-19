const question=[
	{
		question:"How many digit in hundred?",
		answer:[
			{text:"One", correct:false},
			{text:"Two", correct:false},
			{text:"Three", correct:true},
			{text:"four", correct:false},
		]
	},
	{
		question:"How many digit in Thousand?",
		answer:[
			{text:"One", correct:false},
			{text:"Two", correct:false},
			{text:"Three", correct:false},
			{text:"four", correct:true},
		]
	},
	{
		question:"How many digit in Ten?",
		answer:[
			{text:"One", correct:false},
			{text:"Two", correct:true},
			{text:"Three", correct:false},
			{text:"four", correct:false},
		]
	},
];
const qu = document.getElementById("question");
const  btt= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score=0;

function startquiz(){
		currentQuestionIndex=0;
		score=0;
		nextButton.innerHTML = "Next";
		showQuestion();
}
function showQuestion(){
	
	let currentQuestion=question[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	qu.innerHTML = questionNo + "."+ currentQuestion.
	question;
	resetState();
	
	currentQuestion.answer.forEach(answer=>{
		const button=document.createElement("button");
		button.innerHTML =answer.text;
		button.classList.add("btn");
		btt.appendChild(button);	
		if(answer.correct){
			button.dataset.correct =answer.correct;
		}
		button.addEventListener("click",selectAnswer);
	});
}
function resetState(){
	nextButton.style.display ="none";
	while(btt.firstChild){
		btt.removeChild(btt.firstChild);
	}
}

 function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct ==="true";
	if(isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(btt.children).forEach(button => {
		if (button.dataset.correct ==="true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
 }
 
 function showscore(){
	resetState();
	qu.innerHTML =`You scored ${score} out of ${question.length}!`;
	nextButton.innerHTML = "Play Again"
	nextButton.style.display = "block";
 }
 
 function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex<question.length){
		showQuestion();
	}else{
		showscore();
	}
 }

    nextButton.addEventListener("click",()=>{
	if(currentQuestionIndex<question.length){
		handleNextButton();
	}else{
		startquiz();
	}
})

 startquiz();
 
 function all(){
	 start.addEventListener("click",()=>{
		startquiz();
	})
 }