let gs=[];
let us=[];
let uc=[];
let lvl=[0];
let started=false;
let level=0;
let color=["red","blue","yellow","green"]

let h3=document.querySelector("h3");
let body=document.querySelector("body");


document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});


function levelup(){
    us=[];
    level++;
    h3.innerHTML=`Level ${level} <br\><br\>Your highest score is ${highest(lvl)}`

    let rindx=Math.floor(Math.random()*3);
    let rcolor=color[rindx];
    let rbtn=document.querySelector(`.${rcolor}`)
    gs.push(rcolor)
    console.log(gs);
    
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
    },180)
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
        lvl=[];
        lvl.push(level)
        body.classList.add("rrr")
        setTimeout(function(){
            body.classList.remove("rrr")
        },150)
        h3.innerHTML=`Game over! Your score was ${level}<br\>
        Please enter any key to start the game<br\><br\>
        Your highest score is ${highest(lvl)}`
        reset();
    }
}


function highest(levl){
    let highestscore=levl[0];
    for(let i=1;i<=levl.length-1;i++){
        if(levl[i]>highestscore){
            highestscore=levl[i];
        }
    }
    return highestscore;
}


function reset(){
    started=false;
    level=0;
    us=[];
    gs=[];
}