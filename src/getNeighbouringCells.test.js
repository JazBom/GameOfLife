const getNeighbours = require('./getNeighbouringCells');

describe("getNeighbouringCells", () => {
    const neighbour1 = {
        x: 0,
        y: 0,
        isAlive: false,
    };
    const neighbour2 = {
        x: 1,
        y: 0,
        isAlive: false,
    };
    const neighbour3 = {
        x: 2,
        y: 0,
        isAlive: false,
    };

    const neighbour4 = {
        x: 0,
        y: 1,
        isAlive: false,
    };
    const neighbour5 = {
        x: 2,
        y: 1,
        isAlive: false,
    };
    const neighbour6 = {
        x: 0,
        y: 2,
        isAlive: false,
    };
    const neighbour7 = {
        x: 1,
        y: 2,
        isAlive: false,
    };
    const neighbour8 = {
        x: 2,
        y: 2,
        isAlive: false,
    };
    const neighbours = getNeighbours[1,1];
    expect(neighbours).toEqual([neighbour1, neighbour2, neighbour3, neighbour4, neighbour5, neighbour6, neighbour7, neighbour8]);
})