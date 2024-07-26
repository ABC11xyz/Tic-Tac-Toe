let boxs = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msgContainer");
let newButton = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
const tap = document.querySelector("#tap");
const win = document.querySelector("#win");
const Res = document.querySelector("#new");
const Player1 = prompt("Enter Player - 1 Name");
const Player2 = prompt("Enter Player - 2 Name");

const O = Player1.substring(0,1);
const X = Player2.substring(0,1);
  
let turnO = true;

const winningPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]

boxs.forEach((box) => {
  box.addEventListener("click", () => {
  tap.play();
  if(turnO){
    box.innerText =O;
    turnO = false;
  }  else {
    box.innerText =X;
    turnO = true;
  }  

  box.disabled = true; 
  checkWinner();
  });  
});

 

const restart = () => {
  win.pause();
  Res.play();
  turnO = true;
  enableButtons();
  msgContainer.classList.add("hide");
}
 
 

resetButton.addEventListener("click", restart);
newButton.addEventListener("click", restart);
 
 const disableButtons = () => {
  for(let box of boxs){
    box.disabled = true;
  }
 }

 const enableButtons = () => {
  for(let box of boxs){
    box.disabled = false;
    box.innerText = "";
  } 
 }


const checkWinner = () => {

  for ( let pattern of winningPatterns) {
    let posi1 = boxs[pattern[0]].innerText;
    let posi2 = boxs[pattern[1]].innerText;
    let posi3 = boxs[pattern[2]].innerText;
    
    if( posi1 != '' && posi2 != '' && posi3 != ''){
      if( posi1 == posi2 && posi2 == posi3) {
        console.log("Winner Is Announced");
        const winn = posi1 == O ? Player1 : Player2;
        showWinner(winn);
      }
    }
  }
}

const showWinner = (winner) => {
  msg.innerText = `Winner is : ${winner}`;
  msgContainer.classList.remove("hide");
  win.currentTime = 0;
  win.play(); 
  disableButtons();
}


