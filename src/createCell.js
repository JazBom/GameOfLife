const createCell = (x, y, isAlive) => {

    if (x === undefined|| y === undefined|| isAlive === undefined){
        return null;
    } else {
        return {
            x: x,
            y: y,
            isAlive: isAlive
            };
    }
    
};

module.exports = createCell;