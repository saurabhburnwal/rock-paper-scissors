
//Function to generate Computer's choice
function getComputerChoice() { 
    const ch = ['Rock','Paper','Scissors'];
    var cpu = Math.floor(Math.random() * 3);
    return ch[cpu];
}

//Function that accepts player and computer selection and simulates one round
function playround(playerSelection, computerSelection) { 
    // Code Block
}

const playerSelection = prompt("Enter your choice", "Rock");
const computerSelection = getComputerChoice();
console.log(playround(playerSelection,computerSelection));
