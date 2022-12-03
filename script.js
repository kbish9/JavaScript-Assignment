let options = ['rock', 'paper', 'scissors'];
let playerScore=0;
let computerScore=0;
let gameTie=0;
    
const getComputerChoice = () => {
  let randomChoice  = options[Math.floor((Math.random() * 3))];
  return randomChoice;
}
    
const gamePlay = () => {
  for (let i = 0; i < 5; i++) {
    let input = prompt('Choose paper, scissors or rock');
    const playerSelection = input.toLowerCase().trim();
    const computerChoice = getComputerChoice();
        
    const computerWins = `Computer Wins! ${computerChoice} beats ${playerSelection}.`;
    const playerWins = `Player wins! ${playerSelection} beats ${computerChoice}.`;
    const tie = `It's a tie, ${playerSelection} is equal to ${computerChoice}.`;
    
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
      i = i - 1;
      console.log("Nice try! Please enter a valid input.");
    }
    else if (playerSelection === 'rock' && computerChoice === 'paper' || playerSelection === 'paper' && computerChoice === 'scissors' || playerSelection === 'scissors' && computerChoice === 'rock') {
      computerScore+=1;
      console.log(computerWins);
    } 
    else if (playerSelection === 'paper' && computerChoice === 'rock' || playerSelection === 'scissors' && computerChoice === 'paper' || playerSelection === 'rock' && computerChoice === 'scissors') {
      playerScore+=1;
      console.log(playerWins);
    } else {
      if (playerSelection === computerChoice) {
      gameTie+=1;
      console.log(tie);
      }
    }
  }
console.log("Computer:"+computerScore+' vs '+'Player:'+playerScore+' Tie Games: '+gameTie);
}

gamePlay();