const windowHeight = 500
const windowWidth = 500
const blockSize = 20

let state = {
    grid: [],
    rows: windowWidth / blockSize,
    columns: windowHeight / blockSize,
    start: null,
    end: null
}



var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

export function createGrid() {
    let {grid, rows, columns} = state
    for (let x = 0; x < rows; x++) {
        grid[x] = [];
        
        for (let y = 0; y < columns; y++) {
            let blockType

            if (x != 0 && y != 0 && x != rows && y != rows && x % 2 == 1 && y % 2 == 1) {
                blockType = 2;
            } else if (y == 0 || y == 24 || x == 0 || x == 24 ) {
                blockType = 0;
            } else {
                blockType = 1;

            }

            grid[x][y] = {
                blockType: blockType,
                xPos: x,
                yPos: y
            }
        }
    }
    chooseEndPoints()

    return grid
}

export function draw() {
    let {grid} = state
    grid.forEach(function(element) {
        element.forEach(function(key) {
            ctx.fillStyle = getColor(key.blockType)
            ctx.fillRect((key.xPos * blockSize), (key.yPos * blockSize), blockSize , blockSize);
        });
    });
}

function getColor(blockType) {
    switch(blockType) {
        case 0: 
            return 'black'
        case 1: 
            return 'green'
        case 2: 
           return 'orange'
        case 3: 
            return 'red'
        case 4: 
            return 'blue'
    }
}

function chooseEndPoints () {
    let {grid} = state

    let startRow = grid[0];
    state.start = startRow[Math.floor(Math.random() * startRow.length)];
    state.start.blockType = 3

    let endRow = grid[grid.length - 1];
    state.end = endRow[Math.floor(Math.random() * endRow.length)];
    state.end.blockType = 4
}