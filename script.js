console.log("It works!")

const MIN = 1
const MAX = 4

function computerChoice (MIN, MAX) {
    const minCeiled = Math.ceil(MIN);
    const maxFloored = Math.floor(MAX);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}