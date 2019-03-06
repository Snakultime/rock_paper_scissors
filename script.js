function computerPlay() {
  let wordsArray = ['rock', 'paper', 'scissors'];
  let result = wordsArray[Math.floor(Math.random()*wordsArray.length)];
  console.log(result);
  return result
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw ! You need to restart !";
  }

  else if (computerSelection == "paper") {
    return "You lose, restart ?";
  }

  else {
    return "You win, restart ?";
  }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
