var quizData=[
    {
  Question:'Who was the Founder Of Pakistan',
        b:'Allama iqbal',
        a:'Quaid-e-azam',
        c:'Ch Liaqat Ali khan',
        d:'Bhutto',
        corret:'a'
    },
    {
        Question:"Who won the election in 2018",
        a:"Imran Khan Niyazi",
        b:"Nawaz Shreef",
        c:"Asif Zardarri",
        d:"None of them",
        corret:'a'
    },
    {
        Question:"Who won the election in 2018",
        a:"Imran Khan Niyazi",
        b:"Nawaz Shreef",
        c:"Asif Zardarri",
        d:"None of them",
        corret:'a'
    }, 
    {
        Question:"How old imran khan is?",
        a:"20",
        b:"50",
        c:"90",
        d:"65",
        corret:'d'
    } ,
    {
        Question:"Whaat is most useable Programing Language is?",
        a:"JavaScript",
        b:"Python",
        c:"Java",
        d:"C#",
        corret:'c'
    },
    {
        Question:"Whaat HTML Stands For?",
        a:"HyperText Markup Language",
        b:"Python",
        c:"Java",
        d:"C#",
        corret:'a'
    },
    {
        Question:"What Year JavaScript Launched?",
        a:"1995",
        b:"1990",
        c:"1890",
        d:"2022",
        corret:'b'
    }
];
// console.log(QuizData);
let QuestionEl=document.getElementById('question')
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
let currentQuestion=0;

loadData();
function loadData(){
    const CurrentQuizData=quizData[currentQuestion];
    // QuestionEl.innerText=CurrentQuizData.Question;
    a_text.innerText=CurrentQuizData.a;
    b_text.innerText=CurrentQuizData.b;
    c_text.innerText=CurrentQuizData.c;
    d_text.innerText=CurrentQuizData.d;
    
    currentQuestion++;
}