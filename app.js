let gs=[];
let us=[];
let uc=[];
let started=false;
let level=0;
let highestscore=0;
let color=["red","blue","yellow","green"]
let start=document.getElementById("start")

let p=document.querySelector(".main").previousElementSibling;
let body=document.querySelector("body");


document.addEventListener("keypress",function(event){
    if(started ==false && event.key=="Enter"){
        started=true;
        levelup();
    }
});

start.addEventListener("click",function(){
    if(started==false){
        started=true;
        levelup();
    }
})


function levelup(){
    us=[];
    level++;
    p.innerHTML=`Level ${level} <br\><br\>Your highest score is ${highestscore}`

    let rindx=Math.floor(Math.random()*3);
    let rcolor=color[rindx];
    let rbtn=document.querySelector(`.${rcolor}`)
    gs.push(rcolor)

    
    let fl=setInterval(()=>{
        btnflash(rbtn);
    },500);
    setTimeout(()=>{
        clearInterval(fl)
    },500)
    
}


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200)
}


let btn1=document.querySelectorAll(".btn");
for(btn of btn1){
    btn.addEventListener("click",btnpress)
}


function btnpress(){
    let btnnn=this;
    btnflash(btnnn);
    uc=btnnn.getAttribute("id")
    us.push(uc);
    check(us.length-1)
    
}


function check(idx){
    if(us[idx]==gs[idx]){
        if(us.length==gs.length){
            levelup()
        }

    }else{
        if(level>highestscore){
            highestscore=level
        }
        body.classList.add("rrr")
        setTimeout(function(){
            body.classList.remove("rrr")
        },150)
        p.innerHTML=`Game over! Your score was ${level}<br\>
        Please Enter key to start the game<br\><br\>
        Your highest score is ${highestscore}`
        reset();
    }
}


function reset(){
    started=false;
    level=0;
    us=[];
    gs=[];
    start.innerHTML="Restart"
}

let bi=document.querySelector(".btnins")
let inss=document.querySelector(".ins")
let closeb=document.querySelector(".close")

bi.addEventListener("click",()=>{
    inss.classList.remove("hidden")
    
});
closeb.addEventListener("click",()=>{
    inss.classList.add("hidden")
});







