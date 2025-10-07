# LightsOut game
## 22/9/2025
### By: Abdulla Khamis
***

### *Play now on this URL*
[LightsOut](light-sout.surge.sh)

### *Description*

LightsOut is a puzzle where there is a board containing 9 cells. There are light on cells which will be lighter and light off cells which will be darker. The goal is to turn all the lights off. The real challenge becomes when you click on a cell it will toggles the cells above it, under it, right, and left of it. You will need to be smart enough to solve the puzzle in less number of moves and less time.

***

### *Wireframe*

![WireFrame](https://i.postimg.cc/Y9rYrvLW/Screenshot-2025-09-22-201545.png)

***

### *Pseudocode*


* Step 1. Defining required variables to track the state of the game:

    * board: to represent the state of the square on the board.
    * win: to show if the player wins.
    * moves: to calculate the player moves.

* step 2. Store cached element references:

    * a constant called squareEls, storing the 25 elements representing the squares on the page.
    * a constant called messageEl, storing the element that displays the game's status on the page.

 
* step 3. When loading, the game state should be initialized, and a function called to render the game state:

    * init function called when the page loads
    * randomize the 25 cells into on and off to an empty array
    * set win to false
    * calling render function

* step 4. The state of the game should be rendered to the player:

    * creating render function
    * creating update board function that loops over board and for each element:
        * use the current index of the iteration to access the corresponding square in the squareEls.
        * if the state of the cell is on change it to off and the opposite
        * call neighbors function to change the state of the surrounding cells
    * update message function will render a message based on the current game state:
        * check the state of the board if all of the cells are empty then the player wins, other than that add a move to the moves.
    * invoke update board and update message functions inside render function.

* Step 5. Define required constants:

    * in a neighbors constant, define the 25 clicks possible and all the cells surround it.

* Step 6. Handle a player clicking a square with a handleClick function.

    * create a function called handleClick that have event parameter.
    * attach the event listener to the game board to each of the existing squareEls with a loop. set up the event listener to respond to the click event. The event listener calls the handleClick.

    *	* a function named placePiece accepts an index parameter.
        * placePiece function called in the handleClick function.
    * checkForWin function that chacks id the array is empty, then the win variable sets to true.

* step 7. new game functionality:
    * add reset button in the HTML file, then store it.
    * add event listener to to the stored element om click which will calls the init function.



### *Resources*


[home-image](https://tenor.com/view/good-night-gn-tired-bed-time-sleep-gif-16787035985250865454)

[color-hunt](https://colorhunt.co/)

[grid-generator](https://cssgrid-generator.netlify.app/)
