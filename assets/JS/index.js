const cellElements = document.getElementsByClassName('data-cell');
const board = document.getElementsByClassName('data-board')[0];
const turnMessage = document.getElementsByClassName('turn-message-text')[0];
const endGameMessageDiv = document.getElementsByClassName('data-endgame-message')[0];
const endGameMessageText = document.getElementsByClassName('data-endgame-message-text')[0];
const restartButton = document.getElementsByClassName('restart-button')[0];
const scoreXText = document.getElementsByClassName('score-x')[0];
const scoreCircleText = document.getElementsByClassName('score-circle')[0];


let isCircleTurn;
let scoreX = 0;
let scoreCircle = 0;

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

  /**
   * Starting or Restarting Game. Removing all classes and initiating game with X turn
   * Add event listener to all cells.
   * Remove end game message if it is a restart of the game.
   * Call setBoardHover.
   */
function startGame() {
  
  isCircleTurn = false;  

  for (let cell of cellElements) {

    cell.classList.remove('circle');
    cell.classList.remove('x');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });

  }

  setBoardHover();
  endGameMessageDiv.classList.remove('show-endgame-message');

}
/**
 * End Game function to display correct message and restart button.
 * @param {*} isDraw Boolean parameter, true if it is a draw.
 */
function endGame(isDraw) {

    if (isDraw) {
        endGameMessageText.textContent = "Draw!";
    } else {
        endGameMessageText.textContent = isCircleTurn ? "O Won" : "X Won";
        if (isCircleTurn) {
            ++scoreCircle;
            scoreCircleText.textContent = `O: ${scoreCircle}`
        }else if (!isCircleTurn) {
            ++scoreX;
            scoreXText.textContent = `X: ${scoreX}`
        }
    }

    endGameMessageDiv.classList.add('show-endgame-message');

}

/**
 * Checking for win, testing classes agains all combinations in winCombinations.
 * @param {*} currentPlayer  Player currently selected (X or Cicle).
 * @returns Test if one of the winCombinations is true for array elements. Example: testing [0,1,2] then [3,4,5] and so on. I will return true if one of them is true.
 * @returns Test every position of the array element. It will return true if all of them is true. Example: if there is a currentPlayer for [0,1, 2].
 * @returns Test if the position has the class of the currentPlayer.
 */
function checkForWin(currentPlayer) {

    //Test if one of the winCombinations is true for array elements. Example: testing [0,1,2] then [3,4,5] and so on. I will return true if one of them is true.
    return winCombinations.some(function(winCases) {
        //Test every position of the array element. It will return true if all of them is true. Example: if there is a currentPlayer for [0,1, 2].
        return winCases.every(function(index) {
            //Test if the position has the class of the currentPlayer.
            return cellElements[index].classList.contains(currentPlayer);

        });

    });

}

/**
 * Checking for a draw.
 * @returns Check if every position of the board is filled with X or Circle
 */
function checkForDraw() {
    
    return [...cellElements].every(function(cell) {
        return cell.classList.contains('x') || cell.classList.contains('circle');
    });

}

function placeMark(cell, classToAdd) {

    cell.classList.add(classToAdd);

}

/** 
 * Remove classes X and Circle from board and add hover effect to player's turn
 */ 
function setBoardHover() {

    board.classList.remove('x');
    board.classList.remove('circle');

    if (isCircleTurn) {
        board.classList.add('circle');
        turnMessage.textContent = "Circle Turn";
    } else {
        board.classList.add('x');
        turnMessage.textContent = "X Turn";
    }

}

/**
 * Swaping turns and updating turnMessage. Removing X and Circle classes from board to add it again with class turn.
 */
function swapTurns() {

    isCircleTurn = !isCircleTurn;
    setBoardHover();

}

/**
 * Adding X and Circle.
 * Check if win then call function check for Win.
 * Check if Draw then call function check for Draw.
 * @param {*} e Event to be handled
 */
function handleClick(e) {

    // Adding X and Circle
    let classToAdd = isCircleTurn ? 'circle' : 'x';
     
    placeMark(e.target, classToAdd);
    // Check if win
    let isWin = checkForWin(classToAdd);
    // Check if Draw
    let isDraw = checkForDraw();

    if (isWin) {
        endGame(false);
    } else if (isDraw) {
        endGame(true);
    } else {
        // Swap turns
        swapTurns();
    }

}

startGame();
restartButton.addEventListener('click', startGame);