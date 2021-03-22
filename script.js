/*----- constants -----*/
// - PLAYER & WINNER
const currentPlayer = 1;
const winner = 0;
// - Color value for each player
// - Winning combination of the array

/*----- app's state (variables) -----*/
// - The Board's slots (The 20 cells)
// - Display header for whos TURN is it
// - Display header/text for a winner or tie
// - The winner


/*----- cached element references -----*/
// HTML elements that will be manipulated
const p1ScoreEl = document.querySelector('#player-1-score');
const p2ScoreEl = document.querySelector('#player-2-score');
//Header text to change between players and game results

/*----- event listeners -----*/
//      button to start the game
//      click grid/slot selection 

/*----- functions -----*/
//Initialize function to start the game (which will display player 1's turn)
//Function to display whos turn is it by text (Player 1's Turn)
//Function to fill grid slot with color by players choice
//Function to change player after input
//Function to check if that grid slot is taken, return null
//          Repeat Above 3
//Function to check winning combinations
//Function to display results if win/tie/fullboard
//Function to reset game/clear board



// 1) Upon loading the game it should:
// 	    1.1) Initialize the state variables
//                       - Display whose turn it is
//                       - Game result set to null, till winner or tie 
//  	1.2) Render those values to the page
//                       - Rendering the board
//                           - Checking each slot and for each iteration if filled or not
//                           - Making sure the color matches the selection 
//                       - Rendering the display msg
//                           - Render the game result msg either tie or player winner
//  	1.3) Wait for the next input from user

// 2) Handling a player clicking a square
//      2.1) Upon clicking, the square should be checked if blank 
//                          - if blank - fill with the player color,
//                          - if not - return
// 3) How to know when game is over?
//      3.1) When a matching combination is found
//                          - or if entire board is full                       
//                          - then display tie/play again
// 4) Handle a player clicking the start game button again
//                   - game resets