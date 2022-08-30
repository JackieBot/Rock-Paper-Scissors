const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const round = document.getElementById("round");

function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3);
  if (ComputerChoice == 1){
    ComputerChoice = 'rock'
  }else if (ComputerChoice == 2){
    ComputerChoice = 'paper'
  }else ComputerChoice = 'scissors'
  return ComputerChoice
}

btn1.onclick = function playRound(playerSelection) {
  getComputerChoice();
  playerSelection = 'rock';
  if (playerSelection == getComputerChoice()){
    document.getElementById("round").innerHTML = "It's a tie! You both picked " + playerSelection +".";
  } else if (playerSelection == 'rock' && getComputerChoice() == 'paper'){
    document.getElementById("round").innerHTML = "You Lose! Paper beats Rock.";
  } else if (playerSelection == 'rock' && getComputerChoice() == 'scissors'){
    document.getElementById("round").innerHTML = "You Win! Rock beats Scissors.";
  }
}

btn2.onclick = function playRound(playerSelection) {
  getComputerChoice();
  playerSelection = 'paper';
  if (playerSelection == getComputerChoice()){
    document.getElementById("round").innerHTML = "It's a tie! You both picked " + playerSelection +".";
  } else if (playerSelection == 'paper' && getComputerChoice() == 'scissors'){
    document.getElementById("round").innerHTML = "You Lose! Scissors Beats Paper.";
  } else if (playerSelection == 'paper' && getComputerChoice() == 'rock'){
    document.getElementById("round").innerHTML = "You Win! Paper beats Rock.";
  }
}

btn3.onclick = function playRound(playerSelection) {
  getComputerChoice();
  playerSelection = 'scissors';
  if (playerSelection == getComputerChoice()){
    document.getElementById("round").innerHTML = "It's a tie! You both picked " + playerSelection +".";
  } else if (playerSelection == 'scissors' && getComputerChoice() == 'rock'){
    document.getElementById("round").innerHTML = "You Lose! Scissors beats Rock.";
  } else if (playerSelection == 'scissors' && getComputerChoice() == 'paper'){
    document.getElementById("round").innerHTML = "You Win! Scissors beats Paper.";
  }
}



/*for (let i = 0; i < 5; i++) {
  playerSelection = prompt('Pick Rock, Paper, or Scissors? ;)');
  console.log(round(playerSelection,getComputerChoice));
}*/