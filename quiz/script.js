const questions=[
    {
        question:"Who is the PM of India?",
        option1:"Narendra Modi",
        option2:"Amit Shah",
        option3:"Arvind Kejriwal",
        option4:"Rahul Gandhi",
        correctOption:"option1"
    },
    {
        question:"Sun rises from which direction?",
        option1:"North",
        option2:"South",
        option3:"East",
        option4:"West",
        correctOption:"option3"
    },
    {
        question:"Who is the founder of JavaScript?",
        option1:"Mitchell Baker",
        option2:"Chris Beard",
        option3:"Brendan Eich",
        option4:"James Gosling",
        correctOption:"option3"
    },
    {
        question:"Which team won most majors in CS:GO?",
        option1:"Fnatic",
        option2:"NIP",
        option3:"NaVi",
        option4:"Astralis",
        correctOption:"option4"
    },
    {
        question:"Who is the best player of CS:GO?",
        option1:"ZyW0o",
        option2:"S1mple",
        option3:"Fallen",
        option4:"Dev1ce",
        correctOption:"option2"
    }
];

const para = document.querySelector(".question")
const answers = document.querySelectorAll(".answers");
const option1 = document.querySelector("#one");
const option2 = document.querySelector("#two");
const option3 = document.querySelector("#three");
const option4 = document.querySelector("#four");
const submit = document.querySelector("button");
const div = document.querySelector(".container")
// console.log(para);

let questionNumber = 0;
let score = 0;
quiz();

function quiz() {
    deselectAnswers();
    const currentQuestion = questions[questionNumber];
    para.innerText = currentQuestion.question;
    option1.innerText = currentQuestion.option1;
    option2.innerText = currentQuestion.option2;
    option3.innerText = currentQuestion.option3;
    option4.innerText = currentQuestion.option4;
    
}

function deselectAnswers() {
    answers.forEach(answer => answer.checked = false)
}

function getAnswer(){
    let answer;
    answers.forEach(e=>{
        if(e.checked){
            answer = e.id;
        }
    })
    return answer;
}


submit.addEventListener("click",()=>{
    const answer = getAnswer();
    if(answer){
        if(answer===questions[questionNumber].correctOption){
            score++;
        }
        questionNumber++;
        if(questionNumber<questions.length){
            quiz();
        }
        else{
            div.innerHTML = `You answered ${score}/${questions.length} questions correctly<br><button onclick="location.reload()" class="reload">Restart</button>`;
            div.setAttribute("class","result");
        }
    }
})

