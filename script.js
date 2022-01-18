/* const playerSelection = playerSelection();
const computerSelection = computerPlay(); */

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computer(){
    const rock = 1;
    const paper = 2;
    const scissor = 3;
    let computer;
   computer = Math.ceil(Math.random() * 3);
   if(computer === rock){
       return computer = 'rock'.toLocaleUpperCase();
   }else if(computer === paper){
    return computer = 'paper'.toLocaleUpperCase();
   }else if(computer === scissor){
    return computer = 'scissor'.toLocaleUpperCase();
   }
}
//return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Rock beats scissor
//scissor beats paper
//paper beats rock
function playRound(playerSelection, computerSelection){

    if(computerSelection === 'rock'.toLocaleUpperCase()){
        if(playerSelection === 'scissor'.toLocaleUpperCase()){
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }else if(playerSelection === 'paper'.toLocaleUpperCase()){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }else{
            return `Draw!`;
        }
    }else if(computerSelection === 'scissor'.toLocaleUpperCase()){
        if(playerSelection === 'paper'.toLocaleUpperCase){
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }else if(playerSelection === 'rock'.toLocaleUpperCase()){
            return `You win ${playerSelection} beats ${computerSelection}`;
        }else {
            return `Draw!`
        }
    }else if(computerSelection === 'paper'.toLocaleUpperCase()){
        if(playerSelection === 'rock'.toLocaleUpperCase()){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }else if(playerSelection === 'scissor'.toLocaleUpperCase()){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }else{
            return `Draw!`;
        }
    }
    
}

function player(){
    pick = prompt('Paper, Scissor, or Rock?');
    return (pick == false) ? 'Please select from [PAPER, Scissor, or Rock]'.toLocaleUpperCase() : pick.toLocaleUpperCase();
    
}

function playGame(){
    return playRound(player(), computer());

}


