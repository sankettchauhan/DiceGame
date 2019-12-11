var playerOneNumber=(Math.floor(Math.random()*6))+1;
var playerTwoNumber=(Math.floor(Math.random()*6))+1;

var diceImage1="images/dice" + playerOneNumber + ".png";
var diceImage2="images/dice" + playerTwoNumber + ".png";

document.querySelector(".img1").setAttribute("src",diceImage1);
document.querySelector(".img2").setAttribute("src",diceImage2);

function winner(num1, num2){
  if(num1>num2){
    document.querySelector("h1").textContent="Player One Wins";
  }
  else if(num1<num2){
    document.querySelector("h1").textContent="Player Two Wins";
  }
  else{
    document.querySelector("h1").textContent="Draw!!";
  }
}

winner(playerOneNumber,playerTwoNumber);
