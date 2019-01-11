let state = {
    grid: [],
    rows: 15,
    columns: 15,
    blockSize: 50
}

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

export function createGrid() {
    let {grid, rows, columns} = state
    for (let x = 0; x < rows; x++) {
        grid[x] = [];

        for (let y = 0; y < columns; y++) {
            if (x != 0 && y != 0 && x != rows && y != rows && x % 2 == 1 && y % 2 == 1) {
                grid[x][y] = 0;
            } else {
                grid[x][y] = 1;
            }
        }
    }
}

export function draw() {
    let {blockSize, grid} = state
    grid.forEach(function(element, key, arr) {
        console.log(key[arr])
        ctx.fillStyle = getColor(element)
        ctx.fillRect((key * blockSize), (key * blockSize), blockSize, blockSize);
    });
}

function getColor(gridSquare) {
    switch(gridSquare) {
        case 0: 
            return 'brown'
        case 1: 
            return 'black'
    }
}