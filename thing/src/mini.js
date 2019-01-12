const windowHeight = 500
const windowWidth = 500
const blockSize = 20

let state = {
    grid: [],
    rows: windowWidth / blockSize,
    columns: windowHeight / blockSize,
}

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

export function createGrid() {
    let {grid, rows, columns} = state
    console.log(state)
    for (let x = 0; x < rows; x++) {
        grid[x] = [];

        for (let y = 0; y < columns; y++) {
            let blockType
            
            if (x != 0 && y != 0 && x != rows && y != rows && x % 2 == 1 && y % 2 == 1) {
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
            return 'lightblue'
        case 1: 
            return 'black'
    }
}