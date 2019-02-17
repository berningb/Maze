import _ from 'lodash'
import {createGrid, draw, solveMaze} from './maze'



let gv = {
  grid: []
}

function init() {
  gv.grid = createGrid()
  draw(gv.grid)
  solveMaze()
}


init()