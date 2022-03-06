const cellElements = document.getElementsByClassName("data-cell");
const board = document.getElementsByClassName("data-board")[0];
const turnMessage = document.getElementsByClassName("turn-message-text")[0];
const engGameMessageDiv = document.getElementsByClassName('data-endgame-message')[0];
const endGameMessageText = document.getElementsByClassName('data-endgame-message-text')[0];


let isCircleTurn = false;

// Combinations using cell position to represent winning cases
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

// Starting or Restarting Game. Removing all classes and initiating game with X turn
function startGame() {

  for (const cell of cellElements) {


    cell.addEventListener("click", handleClick, { once: true });

  }

  board.classList.add('x');

}

function endGame(isDraw) {

    if (isDraw) {
        endGameMessageText.textContent = "Draw!"
    } else {
        endGameMessageText.textContent = isCircleTurn ? "O Won" : "X Won"
    }

    engGameMessageDiv.classList.add('show-endgame-message');

}

// Checking for win, testing classes agains all combinations in winCombinations.
function checkForWin(currentPlayer) {

    //Test if one of the winCombinations is true for array elements. Example: testing [0,1,2] then [3,4,5] and so on. I will return true if one of them is true
    return winCombinations.some(function(winCases) {
        // Test every position of the array element. It will return true if all of them is true. Example: if there is a currentPlayer for [0,1, 2].
        return winCases.every(function(index) {
            // Test if the position has the class of the currentPlayer.
            return cellElements[index].classList.contains(currentPlayer);

        })

    })

}

function placeMark(event, classToAdd) {

    event.classList.add(classToAdd);

}

// Swaping turns and updating turnMessage. Removing X and Circle classes from board to add it again with class turn.
function swapTurns() {

    isCircleTurn = !isCircleTurn;
    board.classList.remove('x');
    board.classList.remove('circle');

    if (isCircleTurn) {
        board.classList.add('circle');
        turnMessage.textContent = "Circle Turn"
    } else {
        board.classList.add('circle');
        turnMessage.textContent = "X Turn"
    }

}

function handleClick(event) {

    // Adding X and Circle
    let classToAdd = isCircleTurn ? 'circle' : 'x';
     
    placeMark(event.target, classToAdd);
    // Check if win
    let isWin = checkForWin(classToAdd);
    if (isWin) {
        endGame(false)
    }
    // Check if draw


    // Swap turns
    swapTurns();
}

startGame();