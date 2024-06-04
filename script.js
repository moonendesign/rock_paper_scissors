let humanScore
let computerScore
const MAX = 3;


function youLose(humanChoice, computerChoice){
    return console.log("You choose " + humanChoice + " and the computer choose " + computerChoice + ". You lose!");
}

function getComputerChoice (MAX) {
    let choice = Math.floor(Math.random() * MAX);
    console.log(choice)
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
            return console.log("You choose " + humanChoice + " and the computer choose " + computerChoice + ". You win!");
    }
    else {       
        console.log(humanChoice + " is not a valid input. What a bummer!");
    }
}

const computerChoice = getComputerChoice(MAX);
const humanChoice = getHumanChoice();

playround(humanChoice, computerChoice);