const quizdatas = [
    {
        question:"What does HTML stand for ?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Hyper Technology Language",
        e:"Higher Market Language",
        correct:"a"
    },
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Century Style Sheet",
        e:"Control Style Sheet",
        correct:"b"
    },
    {
        question:"What year was Javascript Launched ?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1991",
        e:"None of the above",
        correct:"b"
    },
    {
        question:"Which language runs in a web browser ?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        e:"Php",
        correct:"d"
    },
]

// console.log(quizdatas)

const quiz = document.getElementById('quiz');
const header = document.querySelector('.header');
const answerels = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text'),
        b_text = document.getElementById('b_text'),
        c_text = document.getElementById('c_text'),
        d_text = document.getElementById('d_text'),
        e_text = document.getElementById('e_text');

const submitbtn = document.getElementById('submit');
console.log(answerels);

let currentquiz = 0;
let score = 0;

loadquiz();

function loadquiz(){
    decheck();

    const currentquizdatas = quizdatas[currentquiz];
    
    // console.log(currentquizdatas);
    // currentquiz++;

    header.textContent = currentquizdatas.question;

    a_text.textContent = currentquizdatas.a;
    b_text.textContent = currentquizdatas.b;
    c_text.textContent = currentquizdatas.c;
    d_text.textContent = currentquizdatas.d;
    e_text.textContent = currentquizdatas.e;
}

function selectcheck(){
    let answer;

    answerels.forEach(answerel=>{
        if(answerel.checked){
            answer = answerel.id;
        }
    })

    return answer;
    
}

// selectcheck();

function decheck(){
    answerels.forEach(answerel=> answerel.checked=false);
}

submitbtn.addEventListener('click',()=>{

    // selectcheck();

    const answer = selectcheck();

    if(answer){

        if(answer === quizdatas[currentquiz].correct){
            score++;
        }

        console.log(score)

        currentquiz++;

        if(currentquiz < quizdatas.length){
           loadquiz();
        }else{
            quiz.innerHTML = `
            
            <h2>You answered correctly at ${score} / ${quizdatas.length} questions.</h2>
            <button class="btn" onclick="location.reload()">Reload</button>
            `;
        }
    
        // console.log(currentquiz)
    }
})
