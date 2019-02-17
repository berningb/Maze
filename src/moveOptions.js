import { draw } from "./maze";

let gv = {
    huntingBlock: 2,
    mazeSolved: false,
    options: ['right', 'left', 'top', 'down'],
    markedPositions: [],
    leaderNode: null,
}

function fillOptions() {
    gv.options = ['right', 'left', 'top', 'down']
}

function removeValue(arr) {
    let what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
export function pickDirection(grid, startNode) {
    let {options, leaderNode, markedPositions, huntingBlock} = gv
    let positionNode, direction
    if (options.length === 0) {
        fillOptions()
        console.log('here is the new pos list', gv.markedPositions)
        positionNode = gv.markedPositions.slice(-1)[0]
        console.log('chosen last pos', positionNode)
        gv.markedPositions.pop()
        console.log('new last know pos looks like this', gv.markedPositions)
    } else if (leaderNode == null) {
        positionNode = startNode
    } else {
        positionNode = leaderNode
    }
    direction = gv.options[Math.floor(Math.random() * gv.options.length)]
    console.log('position', positionNode, 'direction:', direction)
    switch(direction) {
        case 'left':
            if (positionNode.xPos > 0) {
                let leftNode = grid[positionNode.xPos - 2][positionNode.yPos]
                if (leftNode.blockType == huntingBlock) {
                    console.log('pushing left node', leftNode)
                    gv.markedPositions = gv.markedPositions.push(leftNode)
                    console.log(gv.markedPositions, 'showing marked pos')
                    for(let i = 1; i < 3; i++) {
                        let newNode = {
                            blockType: 5,
                            xPos: positionNode.xPos - i,
                            yPos: positionNode.yPos
                        }
    
                        grid[positionNode.xPos - i][positionNode.yPos] = newNode
                        gv.leaderNode = newNode
                        fillOptions()
                    }
                    draw(grid)
                } else {
                    removeValue(options, 'left')
                }
            } else {
                removeValue(options, 'left')
            }
            break;

        case 'right':
            let rightNode = grid[positionNode.xPos + 2][positionNode.yPos]
            if (rightNode.blockType == huntingBlock) {
                console.log('pushing right node', rightNode)
                gv.markedPositions.push(rightNode)
                console.log(gv.markedPositions, 'showing marked pos')

                for(let i = 1; i < 3; i++) {
                    let newNode = {
                        blockType: 5,
                        xPos: positionNode.xPos + i,
                        yPos: positionNode.yPos
                    }

                    grid[positionNode.xPos + i][positionNode.yPos] = newNode
                    gv.leaderNode = rightNode
                    fillOptions()

                }
                draw(grid)
            } else {
                removeValue(options, 'right')
            }
            break;

        case 'top':
            let topNode = grid[positionNode.xPos][positionNode.yPos - 2]
            console.log(topNode.blockType, huntingBlock)

            if (topNode.blockType == huntingBlock) {
                markedPositions.push(topNode)
                for(let i = 1; i < 3; i++) {
                    let newNode = {
                        blockType: 5,
                        xPos: positionNode.xPos,
                        yPos: positionNode.yPos - i
                    }

                    grid[positionNode.xPos][positionNode.yPos - i] = newNode
                    gv.leaderNode = newNode
                    fillOptions()

                }
                draw(grid)
            } else {
                removeValue(options, 'top')
            }
            break;


        case 'down':
            let downNode = grid[positionNode.xPos][positionNode.yPos + 2]
            if (downNode.blockType == huntingBlock) {
                markedPositions.push(downNode)
                for(let i = 1; i < 3; i++) {
                    let newNode = {
                        blockType: 5,
                        xPos: positionNode.xPos,
                        yPos: positionNode.yPos + i
                    }

                    grid[positionNode.xPos][positionNode.yPos + i] = newNode
                    gv.leaderNode = newNode
                    fillOptions()

                }
                draw(grid)
            }  else {
                removeValue(options, 'down')
            }
            break;
    }
}