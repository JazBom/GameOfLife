const createCell = require("./createCell");

describe.only("createCell", () => {
    // basic happy path
    it("creates a cell when given coordinates and alive status", () => {
      const testCell = createCell([0, 0, true]);
      expect(testCell).toEqual({
          x: 0,
          y: 0,
          isAlive: true
        });
    });

    it("creates a cell when given coordinates and dead status", () => {
        const testCell = createCell([0, 0, false]);
        expect(testCell).toEqual({
            x: 0,
            y: 0,
            isAlive: false
          });
      });

      // sad paths
      it("if inputs are invalid, return null", () => {
        const testCell = createCell();
        expect(testCell).toEqual(null);
      });
  
  });