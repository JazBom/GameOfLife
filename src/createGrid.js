const createCell = require("./createCell");

const createGrid = (gridSize) => {

    const grid = [];
    for(let x = 0; x <= gridSize; x++){
        if (!grid[x]){
            grid[x] = [];
        }
        for(let y = 0; y <= gridSize; y++){
            const cell = createCell(x, y, false);
            console.log(cell);
            grid[x][y] = createCell(x, y, false);
            //
            //set initial state to alive/dead - random??
            // using function in another function/class -> change state to alive/dead after checking neighbours
        }
    }
}

module.exports = createGrid;
