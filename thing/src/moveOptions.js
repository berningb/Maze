let gv = {
    huntingBlock: 1
}
export function checkLeftNode(map, player) {
    let leftNode = map[player.x][player.y - 1]
    if (leftNode.blockType == gv.huntingBlock) {
        return leftNode
    }
}