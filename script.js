let humanScore = 0;
let computerScore = 0;
const MAX = 3;
let round = 0;

function youLose(humanChoice, computerChoice){
    computerScore++
    round++
    return console.log("You choose " + humanChoice + " and the computer choose " + computerChoice + ". You lose!");
}

function getComputerChoice (MAX) {
    let choice = Math.floor(Math.random() * MAX);
    if (choice == 0)
        return "rock";
    else if (choice == 1)
        return "paper";
    else
        return "scissors"
}

function getHumanChoice() {
    const choice = prompt("Choose a hand: Rock, Paper or Scissors!");
    if (!choice){
        console.log("You have not entered anything in the input box you dummy!")
    }
    else {
        const humanChoice = choice.toLowerCase();
        return humanChoice
    }
}

function playround(humanChoice, computerChoice) {
    
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        if (humanChoice == computerChoice)
            return console.log("You both choosed the same, try again!");
        else if (humanChoice == "rock" & computerChoice == "paper"){
            return youLose(humanChoice, computerChoice);
        } 
        else if (humanChoice == "paper" & computerChoice == "scissors") {
            return youLose(humanChoice, computerChoice);
        }
        else if (humanChoice == "scissors" & computerChoice == "rock") {
            return youLose(humanChoice, computerChoice);
        }
        else
        humanScore++
        round++    
        return console.log("You choose " + humanChoice + " and the computer choose " + computerChoice + ". You win!");
    }
    else {       
        console.log(humanChoice + " is not a valid input. What a bummer!");
    }
}

do {
    const computerChoice = getComputerChoice(MAX);
    const humanChoice = getHumanChoice();

playround(humanChoice, computerChoice);
}
while (round < 5);

console.log("Human Score: " + humanScore)
console.log("Computer Score: " + computerScore)
console.log("Press F5 to try again!")