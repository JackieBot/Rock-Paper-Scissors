function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3);
  if (ComputerChoice == 1){
    ComputerChoice = 'rock'
  }else if (ComputerChoice == 2){
    ComputerChoice = 'paper'
  }else ComputerChoice = 'scissors'
  return ComputerChoice
}

function round(playerSelection, getComputerChoice) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == getComputerChoice()){
    console.log("It's a tie! You both picked " + playerSelection +".");
  } else if (playerSelection == 'rock' && getComputerChoice() == 'paper'){
    console.log("You Lose! Paper beats rocks.");
  } else if (playerSelection == 'paper' && getComputerChoice() == 'scissors'){
    console.log("You Lose! Scissors beats paper.");
  } else if (playerSelection == 'scissors' && getComputerChoice() == 'paper'){
    console.log("You Win! Scissors beats paper.");
  } else if (playerSelection == 'paper' && getComputerChoice() == 'rock'){
    console.log("You Win! Paper beats rock.");
  } else if (playerSelection == 'rock' && getComputerChoice() == 'scissors'){
  console.log("You Win! Rock beats scissors.");
  } else if (playerSelection == 'scissors' && getComputerChoice() == 'rock'){
  console.log("You Lose! Rock beats scissors.");
  } else console.log('you have a spelling error');
}

for (let i = 0; i < 5; i++) {
  playerSelection = prompt('Pick Rock, Paper, or Scissors? ;)');
  console.log(round(playerSelection,getComputerChoice));
}