const quizDB=[{question:"1.What is Capital of India?",
a:"delhi",
b:"pune",
c:"banglore",
d:"mumbai",
answer:"ans1"},

{question:"2.Who is Prime Minister of India?",
a:"Yogi Adityanath",
b:"Narendra Modi",
c:"Dr.Manmohan Singh",
d:"Rahul Gandhi",
answer:"ans2"},

{question:"3.What is Capital of Uttar Pradesh?"
,a:"Lucknow",
b:"Agra",
c:"Jaipur",
d:"Varanasi",
answer:"ans1"},

{question:"4.Who is First PM of India"
,a:"Subhas Chndra Boss",
b:"Pt.Jawahar Lal Nehru",
c:"Dr.Rajendra Prasad",
d:"Dr.Bheem Rao Ambedkar",
answer:"ans2"},

{question:"5.When was Non-cooperation Movement started?"
,a:"1919",
b:"1920",
c:"1929",
d:"1921",
answer:"ans1"},
];
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");

const answers=document.querySelectorAll(".answer");

const showScore=document.querySelector("#showScore");
let quesCount=0;
let score=0;
const loadQuestion=function(){
    quesList=quizDB[quesCount];
    question.innerText=quesList.question;
    option1.innerText=quesList.a;
    option2.innerText=quesList.b;
    option3.innerText=quesList.c;
    option4.innerText=quesList.d;
}
loadQuestion();
const getCheckAnswer=()=>{
let answer;
answers.forEach((curAnsElem)=>{
    if(curAnsElem.checked)
    {
     answer=curAnsElem.id;
    }
    
});
return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElement)=>curAnsElement.checked=false)
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[quesCount].answer)
    {
        score++;
    };
    quesCount++;
    deselectAll();
    if(quesCount<quizDB.length)
    {
        loadQuestion();
    }
    else{
        showScore.innerHTML=`<h3>your score is ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">play again</button>`;

        showScore.classList.remove("scoreArea");
    }
});