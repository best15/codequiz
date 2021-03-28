var startbutton = document.getElementById('start-btn');
var question_answer_container = document.getElementById('question-answer-container');
var questionElement= document.getElementById('questionsection');
var answerbuttons = document.getElementById('answersbutton');


var questionindex ;
var score = 0;


startbutton.addEventListener('click', startquiz);


function startquiz (){

startbutton.classList.add('hide');
questionindex = 0;
question_answer_container.classList.remove('hide');
setnextquestion();
    
}


function setnextquestion(){

    resetcontainer();
    if (questions_answers.length != questionindex)
    {
    renderquestion(questions_answers[questionindex]);
    }else
    {
        submitscore();
    }

}

function renderquestion(question){
    
    questionElement.textContent = question.Q;

    for (var j =0 ; j<question.A.length; j++)
    {
    var answer =  document.createElement('button');
    answer.classList.add("btn");
    answer.textContent = question.A[j].ans;
    answerbuttons.append(answer);
    if (question.A[j].correct)
    {
       answer.dataset.correct = question.A[j].correct;
    }
    answer.addEventListener('click', selectanswer);
    }

}


function selectanswer(event){

    var answercheck = document.createElement('p');
    answerbuttons.append(answercheck);
    var selectedanswer = event.target;
    if(selectedanswer.dataset.correct)
    {
        answercheck.textContent = "Correct";

    }else
    {
        answercheck.textContent = "Wrong";
    }

    questionindex++;
    setnextquestion();


}

function resetcontainer(){
    answerbuttons.innerHTML = '';
}

function submitscore(){

    questionElement.textContent = "All Done !"; 
 
    var ptag = document.createElement("p");
    ptag.textContent = ("Your Final Score is:" + score ) ;
 
    var  userinitials = document.createElement("Label");
    userinitials.textContent = "Enter initials:";
 
    inputcontent = document.createElement("input");
 
    var submit  = document.createElement("button");
    submit.setAttribute("class","btn");
    submit.setAttribute("id","submitbtn");
    submit.textContent = "Submit";
 
    answerbuttons.append(ptag);
    answerbuttons.append(userinitials);
    answerbuttons.append(inputcontent);
    answerbuttons.append(submit);


}

var questions_answers = [
    {
    Q: "Inside which HTML element do we put the JavaScript?",
    A: [
        {ans:"<Scripting>", correct: false},
        {ans:"<Javascript>", correct: false},
        {ans:"<Script>", correct: true},
        {ans:"<js>", correct: false}
        ]
        
    },

    {
        Q: "Where is the correct place to insert a JavaScript??",
        A: [
            {ans:"The <head> section", correct:false},
            {ans:"Anywhere inside <html>", correct:false},
            {ans:"Both <head> and <body> section", correct:false},
            {ans:"The <body> section", correct:true}
        ]
            
    },

    {
        Q: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        A: [
            {ans:"<script src='xxx.js>", correct:true},
            {ans:"<script name='xxx.js'>", correct:false},
            {ans:"<script href='xxx.js'>", correct:false},
            {ans:"<script = 'xxx.js>", correct:false}
        ]

    },

    {
        Q: "Which of the following is not JavaScript Data Types?",
        A:  [
            {ans:"Undefined", correct:false},
            {ans:"Number", correct:false},
            {ans:"Boolean", correct:false},
            {ans:"Float", correct:true}
        ]

    },

    {
        Q: "Which company developed JavaScript?",
        A:  [
            {ans:"Netscape", correct:true},
            {ans:"Bell Labs", correct:false},
            {ans:"IBM", correct:false},
            {ans:"Microsoft", correct:false}
        ]

    },
];
