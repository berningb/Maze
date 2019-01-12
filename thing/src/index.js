import _ from 'lodash'
import {createGrid, draw, getEndPoints} from './mini'



function init() {
  createGrid()
  draw()
  getEndPoints()
}
  

init()