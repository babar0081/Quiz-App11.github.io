const quizData=[
    {
  Question:'Who was the Founder Of Pakistan',
        a:'Allama iqbal',
        b:'Quaid-e-azam',
        c:'Ch Liaqat Ali khan',
        d:'Bhutto',
        correct:"a"
    },{
        Question:"Whaat HTML Stands For?",
        a:"HyperText Markup Language",
        b:"Python",
        c:"Java",
        d:"C#",
        correct:"a"
    },
    {
        Question:"Who won the election in 2018",
        a:"Imran Khan Niyazi",
        b:"Nawaz Shreef",
        c:"Asif Zardarri",
        d:"None of them",
        correct:"a"
    },
     
    {
        Question:"How old imran khan is?",
        a:"20",
        b:"50",
        c:"90",
        d:"65",
        correct:"d"
    }
     ,
    {
        Question:"Whaat is most useable Programing Language is?",
        a:"JavaScript",
        b:"Python",
        c:"Java",
        d:"C#",
        correct:"c"
    },
    {
        Question:"Whaat HTML Stands For?",
        a:"HyperText Markup Language",
        b:"Python",
        c:"Java",
        d:"C#",
        correct:"a"
    },
    {
        Question:"What Year JavaScript Launched?",
        a:"1995",
        b:"1990",
        c:"1890",
        d:"2022",
        correct:"b"
    },{
        Question:"Whaat HTML Stands For?",
        a:"HyperText Markup Language",
        b:"Python",
        c:"Java",
        d:"C#",
        correct:"a"
    }
];
let QuestionEl=document.getElementById('question')
const a_text=document.getElementById("a_text")
const answerEls=document.querySelectorAll('.answer')
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const btn=document.getElementById("Btn")
const quiz=document.getElementById("quiz")
let currentQuestion=0;
let score=0;
// const CurrentQuizData=quizData[currentQuestion];

loadData();
function loadData(ele){
    DeselectAnswers();
    const CurrentQuizData=quizData[currentQuestion];
    QuestionEl.innerText=CurrentQuizData.Question;
    a_text.innerText=CurrentQuizData.a;
    b_text.innerText=CurrentQuizData.b;
    c_text.innerText=CurrentQuizData.c;
    d_text.innerText=CurrentQuizData.d;
    
    currentQuestion++;
}
function getSelected(){
    let answer = undefined;
answerEls.forEach(answerEl => {
    if(answerEl.checked){
        answer=answerEl.id
    }
});
return answer;
}

function DeselectAnswers(){
answerEls.forEach((answerEl) => {
    answerEl.checked = false;
});
}
btn.addEventListener("click",()=>{
let answer=getSelected();
if(answer){
    if(answer === quizData[currentQuestion].correct){
        score++;
    }

    currentQuestion++;
    if(currentQuestion < quizData.length ){
        loadData();
}
else{
    quiz.innerHTML=`
    <h2>You answerd Correctly at ${score}/${quizData.length} questions</h2>
    <button onclick="location.reload()" class="btn">Reload</button>
    `
}
}
});