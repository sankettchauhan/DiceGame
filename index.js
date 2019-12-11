var playerOneNumber=(Math.floor(Math.random()*6))+1;
var playerTwoNumber=(Math.floor(Math.random()*6))+1;

function showDiceOne(diceNumber){
  if(diceNumber==1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  }
  else if(diceNumber==2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  }
  else if(diceNumber==3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  }
  else if(diceNumber==4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  }
  else if(diceNumber==5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  }
  else if(diceNumber==6){
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
  }
}

function showDiceTwo(diceNumber){
  if(diceNumber==1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if(diceNumber==2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if(diceNumber==3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if(diceNumber==4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if(diceNumber==5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else if(diceNumber==6){
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }
}

showDiceOne(playerOneNumber);
showDiceTwo(playerTwoNumber);

function winner(num1, num2){
  if(num1>num2){
    document.querySelector("h1").textContent="Player One Wins";
  }
  else if(num1<num2){
    document.querySelector("h1").textContent="Player Two Wins";
  }
}

winner(playerOneNumber,playerTwoNumber);
