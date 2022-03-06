# Tic-Tac-Toe
Website developed to show Marco Gabarron's portfolio. Website includes Main landing page, projects page and contact me page.
User will find my most recent projects using HTML, CSS, JavaScript and Swift.

![Screens Screenshot](assets/images/screens-screenshot.png)

## Purpose
------

Purpose of this project is to showcase my abilities in HTML, CSS and specially JavaScript to accomplish project 2 of Code Institute course. 
Project was chosen to challenge my abilities and understanding of JavaScript concepts taught on the course and to use it to showcase my abilities for potential employers.

## UX design
------

Ux design developed to be mobile first and user friendly.
Fonts and color Pallet chosen to be playful and easy to read.

- Index Page
    - Landing page designed to be simple but at the same time give user all the information he needs.
    - Game Name at the top of the page.
    - Indication of Player's turn in text as well as hover effect.
    - Block Symbol added when player tries to select a non empty cell.

## Features
------

- Game:  
    - Game detecting who won or if it is a draw.
    - Message of winner appears after the game is finished along with a restart button.
    - Indication of Player's turn in text as well as hover effect.
    - Block Symbol added when player tries to select a non empty cell.

![Game Screenshot](assets/images/navbar-screenshot.png)

- Winner's Logic:
    - Searching throw every win combination after every play to check if there is already a winner.
    - Message stating who won and a restart button added.

![WinnerMessage Screenshot](assets/images/navbar-screenshot.png)

## Testing
------

- Website tested with two different browsers(Chrome, Firefox).

- Responsiveness of website tested and can confirm it is retaining design and readability on all screen sizes.

- I confirmed Home Page is readable and easy to unsderstand.

- Tested all win scenarios to check if winning check is being carried out correctly.

- Tested all draw scenarios to check if draw check is being carried out correctly

- Game changing turns properly 

- Confirmed all cells have an event listener.

- Restart button working properly, removing everything from last game and restarting new.

### Bugs

##### Solved Bugs

- Draw checking wasn't working properly after, had to do some extra studying to understand how I could check if every cell was filled. Discovered how to use every() method for my cellElements.

### Validator Testing
- HTML: 
    - No errors were returned when passing through the official W3C validator.

- CSS: 
    - No errors were returned when passing through the official (jigsaw)) validator.

- JavaScript:
    - No errors were returned when passing through

- Acessibility
    - I confirmed that the colors and fonts chosen are easy to read and accessible by running through lighthouse in devtools.

![LightHouse Screenshot](assets/images/lighthouse-screenshot.png)

### Unfixed Bugs
No unfixed bugs

## Deployment
------

- The site was deployed to GitHub pages. The steps deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab.
    - From the source section drop-down menu, select the Master Branch.
    - Once the master branch has been selected, the page provided the link to the completed website.

The live link can be found here: <a href="https://marco-gabarron.github.io/marco-gabarron-resume/" target="_blank">Tic-Tac-Toe</a>

## Future Developmets
------

- Add score count to game.
- Add more animations to the game. 
- Add functionality where players can select their names.
- Add functionality where players can choose if X or Circle and which one is starting.

## Credits
------

### Content
- Logic behind built with my mentor's help and StackOverflow.