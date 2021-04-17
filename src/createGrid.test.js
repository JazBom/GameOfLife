const createGrid = require("./createGrid");

describe('createGrid', () => {
    it('creates a grid with given grid size', () => {
        // create grid
        // each cell object with x, y, isAlive coordinates
        // function to randomize to be alive
        const testGrid = createGrid(2);
        expect(testGrid).toEqual(
            [
                [
                {x:0,y:0,isAlive:false},
                {x:0,y:1,isAlive:false}
                ],
                [{x:1,y:0,isAlive:false},
                {x:1,y:1,isAlive:false}
                ]
            ]
        )
    });
});

    
