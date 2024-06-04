const MIN = 1
const MAX = 4

let humanScore
let computerScore

function youLose(humanChoice, computerChoice){
    return "You choose ${humanChoice} and the compter choose ${computerChoice}. You lose!";
}


function computerChoice (MIN, MAX) {
    const minCeiled = Math.ceil(MIN);
    const maxFloored = Math.floor(MAX);
    let choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    if (choice == 1)
        return "rock";
    else if (choice == 2)
        return "paper";
    else
        return "scissors"
}

function getHumanChoice() {
    const choice = prompt("Choose a hand: Rock, Paper or Scissors!");
    const humanChoice = choice.toLowerCase();
    if (humanChoice == "rock" || checkedChoice == "paper" || checkedChoice == "scissors")
        return humanChoice
    else
        return "Not a valid choice, try again!"
}

function playround(humanChoice, computerChoice) {
    if (humanChoice == computerChoice)
        return "You both choosed the same, try again!"
    else if (humanChoice == "rock" & computerChoice == "paper"){
        return youLose(humanChoice, computerChoice)
    } 
    else if (humanChoice == "paper" & computerChoice == "scissors") {
        return youLose(humanChoice, computerChoice)
    }
    else if (humanChoice == "paper" & computerChoice == "scissors") {
        return youLose(humanChoice, computerChoice)
    }
    else
        return "You choose ${humanChoice} and the compter choose ${computerChoice}. You win!"
}

