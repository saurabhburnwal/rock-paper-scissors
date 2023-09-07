
function getComputerChoice() { 
    const ch = ['Rock','Paper','Scissors'];
    var cpu = Math.floor(Math.random() * 3);
    return ch[cpu];
}
