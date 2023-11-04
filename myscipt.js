
//Javascript implmentation of standard equlsIgnoreCase() method
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
        return "It's a Draw! " + computerSelection + " cannot beat " + computerSelection;
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

//Function that plays the rounds and keeps track of the score
function game() {
    let pscore = 0;
    let cscore = 0;
    
    const btns = document.querySelectorAll("button");
    const score = document.createElement("div");
    const br = document.createElement("br");
    const event = new Event("gameover");
    let div = document.createElement("div");
    
    btns.forEach((btn) => {
        btn.addEventListener("click", () => { 
            let playerSelection = btn.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            display(result);
            if(result.includes("Win")) { 
                pscore++;
            } else if(result.includes("Lose")) {
                cscore++;
            }
            if(pscore == 5 || cscore == 5) { 
                div.dispatchEvent(event);
            }
        });
    });
    
    div.addEventListener("gameover", () => { 
        if(pscore == 5) { 
            div.textContent = "You Won!";
        } else { 
            div.textContent = "You Lost!";
        }
        document.body.appendChild(div);
        btns.forEach((btn) => { 
            btn.disabled = true;
        });
    });
    
    function display(result) { 
        score.textContent = result;
        const clone = score.cloneNode(true);
        document.body.appendChild(clone);
        document.body.appendChild(br);
    }

}

game();
