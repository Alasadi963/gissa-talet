import readline from 'read-console-input';

const board = [
  [1, 2, 3], // <-. Första raden
  [4, 5, 6], // <-- Andra raden
  [7, 8, 9]  // <-- Tredje raden
];

// STARTA SPELET!
update();

// Denna funktion "kör" hela spelet!!
function update() {
  printHeader();
  printBoard();

  // Börja med att fråga spelaren.
  // Eventuellt kan du skriva egen kod för att
  // randomizera vilken spelare som börjar.
  askPlayer();

  // Vi måste kontrollera om vi har en vinnare efter varje
  // spelares tur..
  if(checkWinner()) {
    return;
  }

  // Om ingen vinnare hittades, fråga av datorn.
  askComputer();

  // Kontrollera vinnare igen...
  if(checkWinner()) {
    return;
  }

  // Om ingen vinnare hittades, måste vi
  // fråga spelarna igen..
  update();
}

function printHeader() {
  console.clear();
  console.log("=== TIC TAC TOE ===\n")
}

function printWinner(winner) {
  printHeader();
  printBoard();

  if(winner === 'DRAW') {
    console.log('Det blev oavgjort!');
  }
  else {
    console.log(winner + " vann!")
  }
}

function printBoard() {
  // Rita ut "top-border".
  process.stdout.write('┌')
  for(let i = 0; i < board[0].length; i++) {
    if(i > 0) {
      process.stdout.write('┬');
    }
    process.stdout.write('───');
  }
  process.stdout.write('┐')
  process.stdout.write('\n')

  // Loopa igenom varje rad..
  for(let r = 0; r < board.length; r++) {
    const row = board[r];

    // Rita ut en linje mellan raderna.
    if(r > 0) {
      process.stdout.write('├')
      for(let c = 0; c < row.length; c++) {
        if(c > 0) {
          process.stdout.write('┼');
        }
        process.stdout.write('───');
      }
      process.stdout.write('┤\n')
    }

    // Vänster "border"
    process.stdout.write('│')

    // Loopa igenom varje kolumn..
    for(let c = 0; c < row.length; c++) {
      // Rita ut ett sträck mellan kolumnerna
      if(c > 0) {
        process.stdout.write('│')
      }
      // Rita ut "cellen"
      process.stdout.write(' ' + row[c].toString() + ' ')
    }

    // Höger "border"
    process.stdout.write('│\n')
  }

  // Rita ut "bottom-border"
  process.stdout.write('└')
  for(let i = 0; i < board[0].length; i++) {
    if(i > 0) {
      process.stdout.write('┴');
    }
    process.stdout.write('───');
  }
  process.stdout.write('┘')
  process.stdout.write('\n')
}

function askPlayer() {
  // Fråga spelaren var hen vill placera..
  console.log('Var vill du placera X:');
  const cell = Number(readline('> '));

  // Validera att hen gav en giltig cell.
  if(cell < 1 || cell > 9) {
    // Ifall hen gan fel cell, fråga igen.
    return askPlayer();
  }

  // Validera att cellen är tom.
  const {row, col} = indexToRowCol(cell);
  if(typeof board[row][col] !== 'number') {
    // Om cellen inte är tom, fråga igen.
    return askPlayer();
  }

  // Om cellen är tom och spelaren gav giltig cell index,
  // Placera ett X i den cellen.
  board[row][col] = 'X';
}

function askComputer() {
  // Välj en random cell
  const emptyCells = findAllEmptyCells();
  const randomCell = emptyCells[Math.floor(emptyCells.length * Math.random())];

  // Convertera cell index till row och column index i board arrayn.
  const {row, col} = indexToRowCol(randomCell);

  // Placera ett O board arrayn på vald plats.
  board[row][col] = 'O';
}

function findAllEmptyCells() {
  const cells = [];
  for(let r = 0; r < board.length; r++) {
    for(let c = 0; c < board[r].length; c++) {
      if(typeof board[r][c] === 'number') {
        cells.push(board[r][c]);
      }
    }
  }
  return cells;
}

function indexToRowCol(index) {
  const row =  Math.floor((index-1) / board.length);
  return {
    row,
    col: (index-1) % board[row].length
  };
}

function checkWinner() {
  let info; // <- används för att hämta info angående vinnare..

  // Kontrollera horizontellt
  for(let r = 0; r < board.length; r++) {
    if((info = getCount(r, 0, 0, 1)).count >= 3) {
      printWinner(info.player);
      return true;
    }
  }
  
  // Kontrollera vertikalt
  for(let c = 0; c < board[0].length; c++) {
    if((info = getCount(0, c, 1, 0)).count >= 3) {
      printWinner(info.player);
      return true;
    }
  }
    
  // Kontrollera diagonalt top left till bottom right
  if((info = getCount(0, 0, 1, 1)).count >= 3) {
    printWinner(info.player);
    return true;
  }
  
  // Kontrollera diagonalt top right till bottom left
  if((info = getCount(0, board[0].length-1, 1, -1)).count >= 3) {
    printWinner(info.player);
    return true;
  }

  // Kontrollera om det blev oavgjort
  if(findAllEmptyCells().length === 0) {
    printWinner('DRAW');
    return true;
  }

  return false;
}

// Denna funktion räknar hur många i rad det finns.
function getCount(rowIndex, colIndex, addRow, addCol) {
  let count = 1;
  const start = board[rowIndex][colIndex];
  while(true) {
    rowIndex += addRow;
    colIndex += addCol;
    
    const row = board[rowIndex];
    if(!row) {
      break;
    }

    const value = row[colIndex];
    if(value !== start) {
      break;
    }

    count++;
  }
  return {player: start, count};
}
