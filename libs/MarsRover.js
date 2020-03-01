'use strict'

const uuid = require('uuid/v1')
const CARDINALS = {
  EAST: 'E',
  NORTH: 'N',
  SOUTH: 'S',
  WEST: 'W',
}

module.exports = class MarsRover {  
  constructor(rover, grid) {
    this.id = uuid()
    this.grid = grid.split(' ')
    const [x, y, direction] = rover.position.split(' ')
    this.x = x
    this.y = y
    this.direction = direction
  }

  turn(instruction) {
    const isLeft = instruction === 'L'
    switch(this.direction) {
      case 'N':
        this.direction = isLeft ? CARDINALS.WEST : CARDINALS.EAST
        break
      case 'S':
        this.direction = isLeft ? CARDINALS.EAST : CARDINALS.WEST
        break
      case 'E':
        this.direction = isLeft ? CARDINALS.NORTH : CARDINALS.SOUTH
        break
      case 'W':
        this.direction = isLeft ? CARDINALS.SOUTH : CARDINALS.NORTH
        break
    }
  }
  
  move() {
    switch(this.direction) {
      case CARDINALS.NORTH:
        this.y++
        break
      case CARDINALS.SOUTH:
        this.y--
        break
      case CARDINALS.EAST:
        this.x++
        break
      case CARDINALS.WEST:
        this.x--
        break
    }

    if ((this.y < 0 && this.y > this.grid[1]) || (this.x < 0 && this.x > this.grid[0])) {
      throw new Error('Move instruction out of area boundary')
    }
  }

  getPosition() {
    return `${this.x} ${this.y} ${this.direction}`
  }
}