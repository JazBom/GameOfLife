//1st class
//2.size of 2D array && row column
//3. for loop going through rows
const GameOfLife = require("./gameOfLife");

describe("GameOfLife", () => {
  // basic happy path
  it("input integer returns integers", () => {
    const integer  = GameOfLife(1);
    expect(integer).toBe(1);
  });
// happy path with array
  it("when input is array or nested array it returns same array or nested array", () => {
    const array  = GameOfLife([[1,3],[2,4]]);
    expect(array).toEqual([[1,3],[2,4]]);
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