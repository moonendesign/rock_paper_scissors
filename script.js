console.log("It works!")

const MIN = 1
const MAX = 4

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