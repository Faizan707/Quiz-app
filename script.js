const quizQB= [
	
	{	question: "Q1 5+2 = ?",
        a:"6",
		b:"5",
		c:"8",
		d:"7",
		ans:"ans4",
	},

	{	question:"6+5= ?",
		a:"11",
		b:"12",
		c:"13",
		d:"15",
        ans : "ans1", 
	}
]

let currentQuestion = 0
let score = 0
const questions = document.getElementById("questions")
const option1 =document.getElementById("option1")
const option2 =document.getElementById("option2")
const option3 =document.getElementById("option3")
const option4 =document.getElementById("option4")
const submit = document.getElementById("btn")
const answers = document.querySelectorAll(".answer")
const showScore = document.getElementById("showScore")


const loadQuestions = () =>{
    const {question, a,b,c,d, ans} = quizQB[currentQuestion]
    questions.innerHTML = question
    option1.innerHTML= a
    option2.innerHTML = b
    option3.innerHTML=c
    option4.innerHTML=d
}
const getCheckAnswers = () =>{
    let answer ;
    answers.forEach((currAnswerEle) =>{
        if(currAnswerEle.checked){
            answer = currAnswerEle.id;
        }

    });
    return answer;

}
submit.addEventListener('click',function(){
    const checkedAnswers =getCheckAnswers()
    console.log(checkedAnswers)
    if(checkedAnswers===quizQB[currentQuestion].ans){
        score++
    }
    currentQuestion++;
    if(currentQuestion<quizQB.length){
        loadQuestions()

    }else{
        showScore.innerHTML= "your score is" +""+score
    }
})
loadQuestions()
