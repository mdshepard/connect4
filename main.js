var columns = document.querySelectorAll(".column");

player1 = true;
player2 = false;
//array to set up the max amount of tokens per column.
// let highestDiscs = [-1, -1, -1, -1, -1, -1, -1];
//highestDisc is signifying for the row position of the highest disc within specified column.
let board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

//This is the click funnction iself.
const getToken = function (event) {
    let column = event.currentTarget;

    let redDisc = document.createElement("div");
    let blackDisc = document.createElement("div");
    blackDisc.className = "gray";
    redDisc.className = "red";
    console.log(column);
    let columnIndex = column.id.split('-')[1];
    //limit to 6 per column
    
    let rowsInColumn = document.querySelectorAll("#" + column.id + " .row"); //highestDiscs[columnIndex];
    let rowIndex = rowsInColumn.length - 1;
    if (rowIndex < 5) {
        rowIndex++;
        // console.log(highestDiscs);
        //these statement make the token's color alternate every other click (via boolean logic).
        if (player1 === true) {
            redDisc.id = 'row-' + rowIndex;
            redDisc.classList.add("row");
            column.appendChild(redDisc);
            board[columnIndex][rowIndex] = 1;
            console.log(board)
            player1 = false;
            player2 = true;
        }
        else {
            blackDisc.id = 'row-' + rowIndex;
            blackDisc.classList.add("row");
            column.appendChild(blackDisc);
            board[columnIndex][rowIndex] = 2;
            console.log(board)
            player1 = true;
            player2 = false;
        }
    }
//detecting winning combo
    
// If we search past the edge we'll get a null pointer error
const edgeX = board[0].length - 3;
const edgeY = board.length - 3;

// HORIZONTAL
// iterate each row
for(let y = 0; y < board.length; y++){

  // iterate each cell in the row
  for(let x = 0; x < edgeX; x++) {
    let cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y][x+1] && cell === board[y] [x+2] && cell === board[y][x+3] ) {
        console.log("4 in a row vertical found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}

// VERTICAL
// iterate each row   
for(let y = 0; y < edgeY; y++){

  // iterate each cell in the row
  for(let x = 0; x < board[0].length; x++) {
    cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y+1][x] && cell === board[y+2] [x] && cell === board[y+3][x] ) {
        console.log("4 in a row horizontal found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}

// DIAGONAL (DOWN RIGHT)
// iterate each row   
for(let y = 0; y < edgeY; y++){

  // iterate each cell in the row
  for(let x = 0; x < edgeX; x++) {
    cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y+1][x+1] && cell === board[y+2][x+2] && cell === board[y+3] [x+3] ) {
        console.log("3 in a row down-right found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}


// DIAGONAL (DOWN LEFT)
// iterate each row   
for(let y = 2; y < board.length; y++){

  // iterate each cell in the row
  for(let x = 0; x < edgeX; x++) {
    cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y-1][x+1] && cell === board[y-2][x+2] && cell === board[y-3] [x+3] ) {
        console.log("3 in a row down-left found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}
}

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.onclick = getToken;
}





        // if (columnPos[columnIndex] >= 6) {
        //     event.target.removeEventListener('click', getToken);
        //     column.removeEventListener('click', getToken);
        // }