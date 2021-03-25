// - PLAYER & WINNER
let profiles = {
    p1: ['1', "red"],
    p2: ['-1', "blue"],
    winner: ['0', "white"]
}
const displayMsgs = ["", "Player 1's Turn", "Player 2's Turn", "Player 1 WINS!", "Player 2 WINS!", "DRAW!"]
let board
let playerOrder = 0;

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
let cells = document.querySelector('#board');
let divCenter = document.querySelectorAll('.sq');

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
    // console.log(cells)
    // cells.addEventListener('mouseover', checkBoard);
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
    playerOrder = 1;
    winner = null;
    render();
}

function playerTurn(cell) {
    // console.log(cell.target.tagName)
    // console.log(cell.target.id)
    // console.log(cell.target.classList)
    // console.log(cell.target.cellIndex)
    // console.log(cell.target.parentNode.id)
    // console.log(cell.target.childNodes[0].classList)
    // let idx = cell.target.id;
    // let column = cell.target.cellIndex;
    if (cell.target.tagName = "TD") {
        let idClass = cell.target.classList.value;
        let column = document.querySelectorAll(`.${idClass}`)
            for (let i = 3; i >= 0; i--) {
            //if classlist does NOT contain blue or red token, then add blue or red token
            // to the div starting at whatever element[i]
                if (column[i].querySelector('div').classList.length === 1) {
                // console.log("element is empty add in class")
                    if (playerOrder === 1) {
                        column[i].querySelector('div').classList.add('blueToken');
                        playerOrder *= -1;
                        displayMsg.innerHTML = displayMsgs[2];
                        break;
                    } else {
                        column[i].querySelector('div').classList.add('redToken');
                        playerOrder *= -1;
                        displayMsg.innerHTML = displayMsgs[1];
                        break;
                    }
                }
            }
        }
    checkBoard();
}
// If player clicks on column, check lowest parentnode.id get tr AND get id 
//  if (cell.target.classList.contains('RedToken' || 'BlueToken')) {
    //      return; 
    //     }
    // "combine" 4 ids of row into 1 column, and check if each id has a div
    //     if (playerOrder === 1 && winner === 0) {
        //             cell.target.childNodes[0].style.backgroundColor = profiles['p1'][1];
        //             cell.classList.add('RedToken')
        //     }else if (playerOrder === -1 && winner === 0) {
            //             cell.target.childNodes[0].style.backgroundColor = profiles['p2'][1];
            //             cell.classList.add('BlueToken')
            //     }
            //     turn *= -1;
            //     winner = checkBoard();
            //     render();
            
            
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
    divCenter = document.querySelectorAll('.sq');
    for (let i = 0; i < winningLines.length; i++) {
        const line1 = divCenter[winningLines[i][0]];
        const line2 = divCenter[winningLines[i][1]];
        const line3 = divCenter[winningLines[i][2]];
        const line4 = divCenter[winningLines[i][3]];
        // console.log(divCenter.classList)
        if (line1.classList.contains('blueToken') &&
            line2.classList.contains('blueToken') &&
            line3.classList.contains('blueToken') &&
            line4.classList.contains('blueToken')) {
                winner = "1";   
        }else if 
            (line1.classList.contains('redToken')  &&
            line2.classList.contains('redToken')  &&
            line3.classList.contains('redToken')  &&
            line4.classList.contains('redToken')) {
                winner = "-1"
         }
    }
    render();
}


//         //return winnning combination whoever has most
// //Function to check winning combinations
// check individual cells and count up to 4 and compare to winning lines
// check rows and columns and diagonals against winning lines.

// function restartGame() 
// //Function to reset game/clear board

function render() {
    p1ScoreEl.textContent = scores.p1;
    p2ScoreEl.textContent = scores.p2;
    if (winner === "1") {
        displayMsg.textContent = displayMsgs[3];
    }else if (winner === "-1") {
        displayMsg.textContent = displayMsgs[4];
    }else if (winner === "0") {
        displayMsg.textContent = displayMsgs[5];
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
