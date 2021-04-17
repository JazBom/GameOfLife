//1st class
//2.size of 2D array && row column
//3. for loop going through rows
// const GameOfLife = require("./GameOfLife");
const CreateDeadCell = require("./createDeadCell");

describe("CreateDeadCell", () => {
    // basic happy path
    it("input object element returns object where life = 'dead'", () => {
      const object = CreateDeadCell({life: 'dead'});
      expect(object).toEqual({life: 'dead'});
    });
  
  });

//test this.cell is alive

// describe('CellState', () => {
//   it('should have an Alive state', () => {
//     expect(cellState.alive).toBe(alive)
//   });
// });

// test this.cell is dead


// test this.cell has 8 neighbours


// test if this.cell is alive and if neighbours.alive <2


// test if this.cell is alive and if neighbours.alive >3


// test if this.cell is dead and if neighbours.alive = 3