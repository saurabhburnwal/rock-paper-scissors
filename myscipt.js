
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

    if(playerSelection.equalsIgnoreCase(computerSelection)) { 
        return "It's a Draw! " + computerSelection + " can't beat " + computerSelection;
    } else { 
        if(playerSelection.equalsIgnoreCase("rock")) { 
            if(computerSelection === "Paper") { 
                return "You Lose! Paper beats Rock";
            } else { 
                return "You Win! Rock beats Scissors";
            }
        } else if(playerSelection.equalsIgnoreCase("paper")) { 
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

function game() { 

    alert("This is a classic Rock-Paper-Scissors Game");

    let score = 0;
    for(let i = 1; i <= 5; i++) { 

        const playerSelection = prompt("Pick your Weapon", "Rock");
        const computerSelection = getComputerChoice();
        let str = playRound(playerSelection,computerSelection);
        
        console.log(str);
        if(str.includes("Win")) { 
            score++;
        } else if(str.includes("Lose")) { 
            score--;
        }

    }

    if(score > 0) { 
        console.log("The Winner of the Best of 5 rounds is You!");
    } else if(score < 0) { 
        console.log("The Winner of the Best of 5 rounds is CPU!");
    } else { 
        console.log("It's a draw!");
    }

}

document.getElementById("start").addEventListener("click", game);
