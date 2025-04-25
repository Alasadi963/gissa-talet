import readline from 'read-console-input';

const row = 6;
const cols = 7;
const space = '|_|';
const player1 = '|O|';
const player2 = '|X|';


// lägger till en tom array alla rader och kolumner

let board = Array.from({ length: row }, () => Array(cols).fill(space));
let currentPlayer = player1
// skriver ut i terminalen
function printBoard() {
    console.log(' 0  1  2  3  4  5  6');
    board.forEach(row => console.log(row.join('')));
}


function main() {
    printBoard()
    let col = readline('Spelare 1, välj din column (0-6): ')
    const row = dropPiece(parseInt(col))
    if (row !== null) {
        // ifall det inte är null så kan man lägga en bricka
        printBoard();
    }
    // här måste man kontrollera om någon vann, skapa en funktion för det
    // här byter man spelare
    currentPlayer = currentPlayer === player1 ? player2 : player1
    let col2 = readline('Spelare 2, välj din column (0-6): ')
    const row2 = dropPiece(parseInt(col))
    if (row !== null) {
        // ifall det inte är null
        printBoard();
    }
    main()
}

function dropPiece(col) {
    for (let row = row - 1; row >= 0; row--) {
        if (board[row][col] === space) {
            board[row][col] = currentPlayer;
            return row;
        }

    }
    return null;
}

main()