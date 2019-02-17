import {pickDirection} from './moveOptions'


const windowHeight = 550
const windowWidth = 550
const blockSize = 50

let state = {
    grid: [],
    rows: Math.floor(windowWidth / blockSize),
    columns: Math.floor(windowHeight / blockSize),
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
            if (y == 0 || y == rows - 1 || x == 0 || x == columns - 1 ) {
                blockType = 0;
            } else if (x % 2 == 1 || y % 2 ==1) {
                blockType = 1;
            } else {
                blockType = 2
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

export function draw(grid) {
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
            return 'blue'
        case 4: 
            return 'red'
        case 5:
            return 'white'
    }
}

export function colorBlock(block) {
    console.log('color blcoks')
    grid[block.xPos][block.yPos].blockType = 5
    draw()
}

function chooseEndPoints () {
    let {grid} = state

    let startRow = grid[0];
    startRow = startRow.filter(function(obj) {
        return obj.yPos % 2 == 0
    })
    startRow.splice(0, 1) //removes first block
    startRow.splice(-1,1) //removed end block
    state.start = startRow[Math.floor(Math.random() * startRow.length)];
    state.start.blockType = 3

    let endRow = grid[grid.length - 1];
    endRow = endRow.filter(function(obj) {
        return obj.yPos % 2 == 0
    })
    endRow.splice(0, 1) //removes first block
    endRow.splice(-1,1) //removed end block
    state.end = endRow[Math.floor(Math.random() * endRow.length)];
    state.end.blockType = 4
}

export function solveMaze() {
    let {grid, start} = state
    console.log('solve mazew')
    setInterval(pickDirection.bind(null, grid, start), 3000)
}