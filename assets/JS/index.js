const cellElements = document.getElementsByClassName("data-cell");
const board = document.getElementsByClassName("data-board")[0];
const turnMessage = document.getElementsByClassName("turn-message-text")[0];

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

// Checking for win, testing classes agains all combinations in winCombinations.
function checkForWin(currentPlayer) {

    //Test if one of the winCombinations is true for array elements
    return winCombinations.some(function(winCases) {
        // Test every position every position of the array element
        return winCases.every(function(index) {
            // test if the current player has a winning condition
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
        alert("Winner")
    }
    // Check if draw
    // Swap turns
    swapTurns();
}

startGame();