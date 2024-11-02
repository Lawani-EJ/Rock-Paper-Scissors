// Defining some variables 
let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';
let moveList = ['Rock','Paper','Scissors'];

// The DOM 
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

// Object 
statusDisplay.textContent = 'Choose!';

// Functions
// startGame() - Starts the game and displays input prompts.
// endGame(event) - Triggered by user input. Computes and displays the end of the game.
// calcResult(move1,move2)- Called in endGame() to compute the result and return it as a string. The moves are a number between 0 - 2 corresponding to the index of the moveList. A victory is returned when move 1 wins over move 2.
// randomMove() - A function that returns a random number between 0 - 2 . Used to generate the computer move in calcResult().

function startGame(){
// Displays the starting of the game 
// And it will display input prompts 

// Adding Event Listener 
statusDisplay.textContent = "Choose!";
buttons.forEach((button, index) => {
  button.textContent = moveList[index];
  button.style.display = "inline-block";
  buttons[index].addEventListener("click", endGame);
});
moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

function endGame(event){
    // Displays end state of game
    // @param {Event} event event containing information of users input.
    let playerMove = moveList.indexOf(event.target.textContent);
    let computerMove = randomMove();
    statusDisplay.textContent = calcResult(playerMove, computerMove);
    moveDisplays.forEach(
      (moveDisplay) => (moveDisplay.style.display = "inline-block")
    );
    moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
    moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;
    buttons.forEach((button, index) => {
      if (index == 1) {
        button.textContent = "Play Again";
        button.removeEventListener("click", endGame);
        button.addEventListener("click", startGame);
      } else {
        button.style.display = "none";
      }
    });

}

function calcResult(move1,move2){
    //  Computes result of the game. returns victory message if move 1 wins.
    //  @param  {Number}   move1  move 1
    //  @param  {Number}   move2  move 2
    //  @return {String}   result result of the game

    var result = move1 - move2;
    if (result == 1 || result + 3 == 1) {
      return winMsg;
    } else if (result == 2 || result + 3 == 2) {
      return loseMsg;
    } else {
      return tieMsg;
    }
}

function randomMove(){
    // eturn {Number}   random number between 0 and 2
    return Math.floor(Math.random() * 3);
}

// Loops 
buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";
  });

startGame();