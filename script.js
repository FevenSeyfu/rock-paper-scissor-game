function getComputerChoice(){
    let computerChoice;
    let random_value = Math.floor(Math.random() * 3);
    if (random_value == 0){
        computerChoice = "rock"
    }
    else if (random_value == 1){
        computerChoice = "paper"
    }
     else{
        computerChoice = "scissors"
    }
    return computerChoice;
}
function playRound(playerSelection,computerSelection){ 
    playerSelection=playerSelection.toLowerCase(); 
    if(computerSelection == playerSelection){
        return "play again! It's a tie."
    }else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore++;
            return "You Lose! Paper beats Rock"
        }
        else{ //Scissor
            playerScore++;
            return "You win! Rock beats Scissor"
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            playerScore++;
            return "You win! Paper beats Rock"
        }
        else{//Scissor
            computerScore++;
            return "You Lose! Scissor beats Paper"
        }
    }else if(playerSelection == 'scissor'){
        if(computerSelection == 'paper'){
            playerScore++;
            return "You win! Scissor beats Paper"
        }
        else{
            computerScore++;
            return "You Lose! Rock beats Scissor"
        }
    }
}
function game(){
    for(let i=0;i<5;i++){
        let playerSelection = prompt('Select from rock, paper or Scissor');
        let computerSelection=getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    if(computerScore>playerScore){
        return "You Lose! with a score of "+playerScore +":"+ computerScore;
    }else if(computerScore<playerScore){
        return "You win! with a score of "+playerScore +":"+ computerScore;
    }else{
        return "Play again! It's a tie,with a score of " +playerScore +":"+ computerScore;
    }
}
let computerScore=0;
let playerScore=0;
let finalWinner;
// let score=[];

console.log(game())

// playRound(playerSelection,computerSelection);

