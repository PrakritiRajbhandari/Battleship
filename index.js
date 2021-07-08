//Grid size: result will be n*n cells
const GRID_SIZE = 3;

// BattleShip Grid (filled with Os)
const grid = new Array(GRID_SIZE * GRID_SIZE);
grid.fill('O');
// Ship Locations
const shipLocations = [];

for (let i = 0; i < GRID_SIZE * 1; i++) {
  shipLocations.push("" + i);
}

let guess; //Entered value
let count = 0; //counter for rounds
const shipSunk = []; //battleship sunk

do { //loop indefintely until the user clicks cancel on prompt
 
  guess = prompt( `Round #${++count}\n` +
                  `${printGrid()}\n` +
                  `Enter a Number Between 0-${GRID_SIZE * GRID_SIZE - 1}`);
  if (!guess && guess !== 0)
    break; //Stop when cancel was clicked
  const hit = shipLocations.indexOf(guess) >= 0;
  
  if(grid[guess] === '1' || grid[guess] === 'X' ){
       alert(`Already guessed the number. Please guess another number`)
    } 
  else{
     alert(`At round ${count}, cell ${guess} is a ${hit ? 'hit': 'miss'}`);
      grid[guess] = hit ? '1' : 'X';
    }
  
  for (i=0;i<shipLocations.length; i++){
  if (grid[i] === '1'){
      shipSunk[i] = 1;
   }
}

if (shipSunk.toString() === '1,1,1'){
    alert("All battleships are sunk")
}

} while (guess || guess === 0); // exit 

// Print the Game Board

function printGrid() {
  let gameBoard = "";
  for (let x = 0; x < GRID_SIZE; x++) {
    let row = "";
    for (let y = 0; y < GRID_SIZE; y++) {
      row += " " + grid[x * GRID_SIZE + y];
    }
    gameBoard += row.substr(1) + '\n';
  }

  return gameBoard;
}

