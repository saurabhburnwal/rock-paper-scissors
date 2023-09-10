String.prototype.equalsIgnoreCase = function (compareString) { 
    return this.toUpperCase() === compareString.toUpperCase(); 
}; 

//Function to generate Computer's choice
function getComputerChoice() { 
    const ch = ['Rock','Paper','Scissors'];
    var cpu = Math.floor(Math.random() * 3);
    return ch[cpu];
}

//Function that accepts player and computer selection and simulates one round
function playRound(playerSelection, computerSelection) { 
    p = playerSelection.toLowerCase();
    if(playerSelection.equalsIgnoreCase(computerSelection)) { 
        return "It's a Draw!";
    } else { 
        if(p === "rock") { 
            if(computerSelection === "Paper") { 
                return "You Lose! Paper beats Rock";
            } else { 
                return "You Win! Rock beats Scissors";
            }
        } else if(p === "paper") { 
            if(computerSelection === "Scissors") { 
                return "You Lose! Scissors beats Paper";
            } else { 
                return "You Win! Paper beats Rock";
            }
        } else { 
            if(computerSelection === "Rock") { 
                return "You Lose! Rock beats Scissors";
            } else { 
                return "You Win! Scissors beats Paper";
            }
        }
    }
}

const playerSelection = prompt("Enter your choice", "Rock");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
