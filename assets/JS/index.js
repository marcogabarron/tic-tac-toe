const cellElements = document.getElementsByClassName("data-cell");
const board = document.getElementsByClassName("data-board")[0];
const turnMessage = document.getElementsByClassName("turn-message-text")[0];

let isCircleTurn = false;

function placeMark(event, classToAdd) {

    event.classList.add(classToAdd);

}

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
    // Check if draw
    // Swap turns
    swapTurns();
}

  for (const cell of cellElements) {

    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });

  }
