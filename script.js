const cOptions = ["Rock", "Paper", "Scissors"];
const playerSelection = prompt(`Please pick rock, paper or scissor.`).toLocaleLowerCase().trim();
  if (playerSelection==="rock"||"scissors"||"paper") {
    playerChoice =`${playerSelection}`;
  } else {
    console.log(`Error, please try again.`);
  }


function computerPlay() {
 return cOptions[Math.floor(Math.random()*3)];
}

function playRules(computerPlay, playerSelection) {
  if (computerPlay=="Rock" && playerSelection=="paper") {
    output="You win! Paper beats Rock";
   } else if(computerPlay=="Rock" && playerSelection=="scissors") {
    output="You lose! Scissors beats Rock";
   } else if (computerPlay=="Paper" && playerSelection=="rock") {
    output="You lose! Rock beats Paper";
   } else if (computerPlay=="Paper" && playerSelection=="scissors") {
    output="You win! Scissors beats Paper";
   } else if (computerPlay=="Scissors" && playerSelection=="rock") {
    output="You win! Rock beats Scissors";
   } else if (computerPlay=="Scissors" && playerSelection=="paper") {
    output="You lose! Paper beats Scissors";
   } else {
    output="It's a tie";
  }
  return(output);
}


console.log(playerSelection,computerPlay(),playRules(computerPlay(cOptions),playerSelection));
