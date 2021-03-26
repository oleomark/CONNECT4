//--Constants--//
const displayMsgs = ["Drop token to start!", "Player 1's Turn", "Player 2's Turn", "Player 1 WINS!", "Player 2 WINS!", "DRAW!"];
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
];

//--App's States--//
let playerOrder = 1;
let winner = null;
let cells = document.querySelector('#board');
let divCenter = document.querySelectorAll('.sq');
let divInner = Array.from(divCenter);

//--Cached Element References--//
let displayMsg = document.querySelector('#display-header'); 
cells.addEventListener('click', playerTurn);
document.querySelector("#button").addEventListener("click", () => {
            for (let i = 0; i < divInner.length; i++) {
                console.log(divInner.length)
                divInner[i].classList.remove('blueToken');
                divInner[i].classList.remove('redToken');
                winner = null;
                displayMsg.textContent = displayMsgs[0];
                playerOrder = 1;
            }
});

//--Functions--//
function initialize() {
    render();
}

function playerTurn(cell) {
    if (cell.target.tagName = "TD") {
        let idClass = cell.target.classList.value;
        let column = document.querySelectorAll(`.${idClass}`)
            for (let i = 3; i >= 0; i--) {
                if (column[i].querySelector('div').classList.length === 1) {
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

function checkBoard() {
    let tieCheck = divInner.every((div) => {
        return div.classList.length === 2
      });
    for (let i = 0; i < winningLines.length; i++) {
        const line1 = divCenter[winningLines[i][0]];
        const line2 = divCenter[winningLines[i][1]];
        const line3 = divCenter[winningLines[i][2]];
        const line4 = divCenter[winningLines[i][3]];
 
    if (tieCheck) {
        winner = "0";
        }

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
            winner = "-1";
         } 

    }
    render();
}

function render() {
    if (winner === "1") {
        displayMsg.textContent = displayMsgs[3]; 
    }else if (winner === "-1") {
        displayMsg.textContent = displayMsgs[4];
    }else if (winner === "0") {
        displayMsg.textContent = displayMsgs[5];
      }
    }

initialize();
