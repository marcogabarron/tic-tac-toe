const cellElements = document.getElementsByClassName("data-cell");



  for (const cell of cellElements) {

    cell.addEventListener("click", handleClick, { once: true });

  }

  function handleClick() {
      // Adding X and Circle
      // Check if win
      // Check if draw
      // Swap turns
  }