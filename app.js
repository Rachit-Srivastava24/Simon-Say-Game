let gamSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","blue"];

let started = false;
let Level = 0;

let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
  if(started == false){
    console.log("Game is Started");
    started = true;

    levelup();
  }
});
function gameFlash(btn) {
btn.classList.add("flash");
setTimeout(function () {
  btn.classList.remove("flash");
}  ,250)
}

function userFlash(btn) {
btn.classList.add("userflash");
setTimeout(function () {
  btn.classList.remove("userflash");
}  ,250)
}

function levelup() {
  userSeq = [];
  Level++; //increment of level
  h2.innerText=`level ${Level}`;

  let randmIdx = Math.floor(Math.random()*3);//random btn choose
   let randColor = btns[randmIdx];
   let randbtn = document.querySelector(`.${randColor}`);
  //  console.log(randmIdx);
  //  console.log(randbtn);
  //  console.log(randColor);
  gamSeq.push(randColor);
  console.log(gamSeq);
  gameFlash(randbtn);
}

function checkAns(idx){
// console.log("curr level : ", Level);
if(userSeq[idx] === gamSeq[idx]){
  if(userSeq.length == gamSeq.length){
    setTimeout(levelup,1000);
  }
}else{
  h2.innerHTML = `Game Over! Your Score was <b>${Level}</b> <br>  Press any key to start.`; 
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function(){
document.querySelector("body").style.backgroundColor = "white";
  },150);
  reset();
}

}

function btnPress(){
  // console.log(this);//printing of ramdom colors
  let btn = this;
  userFlash(btn);

  userColor=btn.getAttribute("id");
  userSeq.push(userColor);//add in userseq
  checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started = false;
  gamSeq = [];
  userSeq = [];
  Level = 0;

}

