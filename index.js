let h4 = document.querySelector('h4');
let allBox = document.querySelectorAll('.box');

let gameSeq = [];
let playerSeq = [];
let started = false;
let level = lv = 0;

for(let box of allBox){
    box.addEventListener('click', (event)=>{
        toggle(event.target);
        playerSeq.push(event.target.id);
        stts();
        checkSeq();
    })
}
document.addEventListener('keypress',()=>{
    if(!started){
        started = true;
        simonGame();
    }
})

function stts(){
    console.log("level ",level);
    console.log("playerSeq ",playerSeq);
    console.log("gameSeq ",gameSeq);
    console.log("started ",started);
    console.log("lv ",lv);
}
function toggle(box){
    box.style.opacity = 0;
    setTimeout(()=>{
        box.style.opacity = 1;
    },250);
}
function checkSeq(){
    if(gameSeq[lv] == playerSeq[lv] && lv<=level){
        lv++;
    }else if(gameSeq[lv] != playerSeq[lv]){
        gameSeq = [];
        playerSeq = [];
        started = false;
        h4.innerHTML = `<b>Game Over!</b> Score : ${level}
                        <br> Press Any key to START`;
        level = 0;
    }
    if(lv > level){
        playerSeq = [];
        level++;
        simonGame();            
    }
}
function simonGame(){
    lv = 0;
    h4.innerText = 'Level '+level;
    let randBox = Math.ceil(Math.random() * 4);
    gameSeq.push(allBox[randBox-1].id);
    setTimeout(()=>{
        toggle(allBox[randBox-1]);
    }, 300);
}
