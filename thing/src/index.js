import _ from 'lodash'
import {createGrid, draw, getEndPoints} from './mini'


let gv = {
  grid: []
}

function init() {
  gv.grid = createGrid()
  draw()
}
  

init()