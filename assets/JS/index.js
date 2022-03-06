const cellElements = document.getElementsByClassName("data-cell");

let isCircleTurn;

function handleClick(event) {

    // Adding X and Circle
    let classToAdd = isCircleTurn ? 'circle' : 'x';
     
    event.target.classList.add(classToAdd);
    // Check if win
    // Check if draw
    // Swap turns

}

  for (const cell of cellElements) {

    
    cell.addEventListener("click", handleClick, { once: true });

  }
