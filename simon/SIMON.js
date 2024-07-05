let gameseq=[];
let userseq=[];


let btns=['red','yellow','green','blue'];
let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

            levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};


function userFlash(btn1){
    btn1.classList.add("userflash");
    setTimeout(function(){
        btn1.classList.remove("userflash");
    },250);
};


function levelUp(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;


//random button choose
let randomIdx=Math.floor(Math.random()*3);
let randomColor=btns[randomIdx];
let randombtn=document.querySelector(`.${randomColor}`);

gameseq.push(randomColor);
console.log(gameseq);


// console.log(randomIdx);
// console.log(randomColor);
// console.log(randombtn);

btnFlash(randombtn);
}


function checkbtn(idx){
    // console.log("curr level: ", level);

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
             
        }
        
    }else{
        h2.innerHTML=`Game over!Your score was ${level}<br> press any key to start`;
             
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        reset();
}
}

function btnPress(){
    // console.log(this);
    let button=this;
    userFlash(button); 

    let usercolor=button.getAttribute("id");
    userseq.push(usercolor);

    checkbtn(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btnn of allbtns){
    btnn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}