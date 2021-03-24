// - PLAYER & WINNER
let profiles = {
    p1: ['1', "red"],
    p2: ['-1', "blue"],
    winner: ['0', "white"]
}
const displayMsgs = ["", "Player 1's Turn", "Player 2's Turn", "Player 1 WINS!", "Player 2 WINS!", "DRAW!"]
let board
let PlayerOrder = 0;
// - Winning combination 
const winningLines = [
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
]

/*----- app's state (variables) -----*/
// - The Board's slots (The 20 cells)
const cells = document.querySelectorAll('#board td');


/*----- cached element references -----*/
// HTML elements that will be manipulated
const p1ScoreEl = document.querySelector('#player-1-score');
const p2ScoreEl = document.querySelector('#player-2-score');
const displayMsg = document.querySelector('#display-header');
// - Display header for TURN & RESULTS

/*----- event listeners -----*/
//      button to start the game
document.querySelector('button').addEventListener('click', initialize);
// listener for every cell
// for (let i = 0; i < td.length; i++) {
//     td[i].addEventListener('click', placeToken)
//     td[i].addEventListener('mouseover', checkBoard)
// // }
cells.addEventListener('click', playerTurn);
cells.addEventListener('mouseover', checkBoard);
// const cellTaken = document.querySelector("#board td", placeToken);




/*----- functions -----*/
//Initialize data to start the game
function initialize() {
    scores = {
        p1ScoreEl: 0,
        p2ScoreEl: 0,
    };
    displayMsg.innerHTML = displayMsgs[1];
    cells = null;
    PlayerOrder = 1;
    winner = null;
    render();
}

//Function to change player 
function playerOrder() {
    if (playerOrder === 1) {
        displayMsg.innerHTML = displayMsgs[1];
    }else{
        displayMsg.innerHTML = displayMsgs[2];
    }
}
function playerTurn(cell) {
    let idx = cells.target.id;
         if (cells.classList.contains('RedToken' || 'BlueToken') {
            return; 
    }
        if (playerOrder === 1 && winner === 0) {
                cells.target.childNodes[0].style.backgroundColor = profiles['p1'][1];
                cells.classList.add('RedToken')
        }else if (playerOrder === -1 && winner === 0) {
                cells.target.childNodes[0].style.backgroundColor = profiles['p2'][1];
                cells.classList.add('BlueToken')
        }
        turn *= -1;
        winner = checkBoard();
        render();
}

// function playerMove(cell) { 
//     // console.log(cell)
//     // console.log(cell.target.childNodes)
//     // console.log(idx)
//     // if (turn === 1) {
//         // }else{
//             //     cellChange = cell.target.childNodes[0].style.backgroundColor = "blue";
//             // }
//             // turn *= -1;
//             // winner = getWinner();
//             // render()
//         }

//Function to fill grid slot with color by players choice
// CHECKING ROW,COLUMNS, IF NOT FILLED, THEN FILL , IF FILLEd PUSH ONTO ROW 3,
//Function to check if that grid slot is taken, return null
// 

// function checkWinCondition() 
// Taking the 4 values of the array and compare
function checkBoard() {
    for(let i = 0; i < winningLines.length; i++) {
        const i1 = td[winningLines[i][0]];
        const i2 = td[winningLines[i][1]];
        const i3 = td[winningLines[i][2]];
        const i4 = td[winningLines[i][3]];
}
// //Function to check winning combinations

// function restartGame() 
// //Function to reset game/clear board

function render() {
    p1ScoreEl.textContent = scores.p1;
    p2ScoreEl.textContent = scores.p2;
    if (winner === "1") {
        mainHeaderEl.textContent = displayMsgs[3];
    }else if (winner === "-1") {
        mainHeaderEl.textContent = displayMsgs[4];
    }else if (winner === "DRAW") {
        mainHeaderEl.textContent = displayMsgs[5];
    }
    scores[winner]++;
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