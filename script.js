// - PLAYER & WINNER
let currentPlayer = 1;
let winner = 0;
// - Color value for each player
const colors = {
    '1': "red",
    '-1': "blue"
};
// - Winning combination 
const winningCondition = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [0, 5, 10, 15],
    [1, 6, 11, 16],
    [2, 7, 12, 17],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [4, 8, 12, 16],
    [3, 7, 11, 15],
];

/*----- app's state (variables) -----*/
// - The Board's slots (The 20 cells)
const cells = document.querySelectorAll('#board td' )
// - Display header for whos TURN is it
// - Display header/text for a winner or tie
// - The winner
let board, turn;


/*----- cached element references -----*/
// HTML elements that will be manipulated
const p1ScoreEl = document.querySelector('#player-1-score');
const p2ScoreEl = document.querySelector('#player-2-score');
const mainHeaderEl = document.querySelector('#display-header');
//Header text to change between players and game results

/*----- event listeners -----*/
//      button to start the game
document.querySelector('button').addEventListener('click', gameStart);
//      click grid/slot selection 
const cellClicked = document.querySelector("#board").cellClicked.addEventListener("click");


/*----- functions -----*/
//Initialize function to start the game (which will display player 1's turn)
function initialize() {
    scores = {
        p1: 0,
        p2: 0,
    };
    cells = null;
    turn = 1;
    winner = null;
    render();
}

function gameStart()
//Function to display whos turn is it by text (Player 1's Turn)
   // initiate a null variable, during game intiate change the p1 
//Function to fill grid slot with color by players choice
function changeCellColor() // or class?
//Function to change player after input
function switchPlayer(currentPlayer) {
    if (currentPlayer === 'p1') {
        player = 'p2';
    } else {
        player = 'p1';
    }
}
//Function to check if that grid slot is taken, return null
function checkCell() 
//          Repeat Above 3
//Function to check winning combinations
function checkWinCondition() 
//Function to display results if win/tie/fullboard
//Function to reset game/clear board
function restartGame() 

function render() {
    p1ScoreEl.textContent = scores.p1;
    p2ScoreEl.textContent = scores.p2;
}

initialize();


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

// ICEBOX STUFF WOULD BE
// - Different grid sizes
// - Playing vs the CP
// 