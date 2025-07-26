let started = false;
let level = 0;
let colorArr = ["red","yellow","green","purple"];
let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".box");

document.addEventListener("keypress",function(){
    if(started === false){
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`;
    ColorGen();
}

function ColorGen(){
    let randIdx = Math.floor(Math.random()*4);
    let randColor = colorArr[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    flashBtn(randBtn);
    console.log(gameSeq);
}

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

for(btn of btns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    clickBtn = this;
    let userColor = clickBtn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    flashBtn(clickBtn);
    checkAns(userSeq.length - 1);
}

function checkAns(idx){
    if (gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was ${level-1}<br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    userSeq =[];
    gameSeq = [];
    level = 0;
}