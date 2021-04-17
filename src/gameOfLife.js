class GameOfLifeClass {
    constructor(){  
    }
    }

const GameOfLife = (arr) => {
  for(i = 0; i > arr.length; i++){
        for(j = 0; j > arr.length; j++){
            //
            //set initial state to alive/dead - random??
            // using function in another function/class -> change state to alive/dead after checking neighbours
        }
    }
      return arr;
    };
    
module.exports = GameOfLife;

//createGrid
//getNeighbours
//getCell
//need applyGrid function
/* 
const grid = createGrid(20);
const randomisedGrid = randomGrid(grid);
for (let i = 0; i < iterations; i++){
      const currentState = applyRules(randomisedGrid);
      randomisedGrid = currentState;
      -> get randomised states
      -> current state
      -> make them dad or alive
      -> set the new state
}*/
//console.log(randomisedGrid)
/* create rules....
if(testCell && testCell.isAlive){aliveCells++} else //skips

*/