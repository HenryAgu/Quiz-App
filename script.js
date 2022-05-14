const quizData = [
    {
        question: "Which language is used for creating Web Pages?",
        a: "BASIC",
        b:"PASCAL",
        c:"HTML",
        d:"javaScript",
        correct:"c",
    },
    {
        question: "What is the abbreviation of HTTP?",
        a: "Hypertext tag path",
        b:"Hyper Text Transfer Protocol",
        c:"Hypertext transfer path",
        d:"None",
        correct:"b",
    },
    {
        question: "The entire web document is contained within ____",
        a: "Comments",
        b:"Tags",
        c:"Web page",
        d:"HTML element",
        correct:"d",
    },
    {
        question: "GIF is the abbreviation for ___",
        a: "Graphics Interchange Format",
        b:"Graphics Instruction Format",
        c:"Graphics Item Format",
        d:"Graphics Information Format",
        correct:"a",
    },
    {
        question: "What is the full meaning of CSS?",
        a: "Cascading Style Sheet",
        b:"Central Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"a",
    },
    {
        question: "Whats so great about XML?",
        a: "Easy data exchange",
        b:"High speed on network",
        c:"Only B.is correct",
        d:"Both A & B",
        correct:"d",
    },
    {
        question: "Which of the following options is correct with regard to HTML?",
        a: "It is a modelling language",
        b:"It is a scripting language",
        c:"It is a partial programming language",
        d:"Both A & B",
        correct:"c",
    },
    {
        question: "Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
        a: " Associations",
        b:"Transitions",
        c:"Transistor",
        d:"Both A & B",
        correct:"b",
    },
    {
        question: "Which of the following statement is not true regarding JavaScript?",
        a: "JavaScript embedded in an HTML document is compiled and executed by the client browser",
        b:"JavaScript is event driven",
        c:"JavaScript is an object-based language",
        d:"JavaScript is a loosely typed language",
        correct:"a",
    },
    {
        question: "While working on a JavaScript project, in your JavaScript application, which function would you use to send messages to users requesting for text input?",
        a: "Display() ",
        b:"Prompt() ",
        c:"Alert()",
        d:"Confirm() ",
        correct:"b",
    },
];

const quiz = document.getElementById('quiz');
const previewText =document.getElementById('preview-text')
const quizHeader = document.getElementById('quiz-header')
const answersEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');  
const startBtn = document.getElementById('start');

let randomQuestions;
let currentQuiz = 0;
let score = 0;

startBtn.addEventListener('click',startGame);

function startGame(){
    startBtn.classList.add("hide");
    previewText.classList.add('hide')
    quizHeader.classList.remove('hide')
    submitBtn.classList.remove('hide')
}

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    randomQuestions = quizData.sort(() => Math.random() - .5);
    const currentQuizData = quizData[currentQuiz]
    questionEls.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectAnswers(){
    answersEls.forEach(answersEl => answersEl.checked = false)
}


function getSelected(){
    let answer
    answersEls.forEach(answersEl => {
        if(answersEl.checked){
            answer = answersEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer){
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    
    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        if(score < 5){
            quiz.innerHTML = `<h2>Your score on this Quiz is  ${score}/${quizData.length}, which is low. Please Restart quiz.</h2>
            <button onclick="location.reload()">Reload</button>
        `
        }else if(score >= 9){
            quiz.innerHTML = `<h2>Your score on this Quiz is  ${score}/${quizData.length}, you scored above Average.</h2>
            <button onclick="location.reload()">Reload</button>
        `
        }else if(score = 10){
            quiz.innerHTML = `<h2>Congratulations, your score on this Quiz is  ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
        `
        }
    }            
    }
})