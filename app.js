let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let highScore=localStorage.getItem("highScore")||0;

let started= false;
let level=0;

let h2= document.querySelector("h2");
let h3= document.querySelector("h3");


document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game start");
        started= true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor= btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    //console.log("curr level:", level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game over!Your Score was <b>${level}</b> <br> Press any key to start`;
        if(level>highScore){
            highScore=level;
            localStorage.setItem("highScore",highScore);
            h3.innerHTML=`Highest Score:<b>${highScore}</b>`
        }
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500);
        reset();
    }
}

function btnpress() {
    let btn = this;
    btnFlash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

