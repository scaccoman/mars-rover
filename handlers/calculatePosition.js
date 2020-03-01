'use strict'

const MarsRover = require('../libs/MarsRover')
const validate = require('../libs/schemas/calculatePosition')
const responses = require('../libs/responses')

module.exports = async event => {
  try {
    if (!event || !event.body) {
      throw new Error('Please provide a payload')
    }

    const data = JSON.parse(event.body)
    
    if (!validate.request(data)) {
      throw new Error(JSON.stringify(validate.request.errors))
    }

    const rovers = data.rovers.map(rover => {
      
      const instructions = rover.instructions.split('')
      const marsRover = new MarsRover(rover, data.plateau.gridSize)

      instructions.forEach(instruction => {
        if (instruction === 'M') return marsRover.move()
        return marsRover.setDirection(instruction)
      })

      return {
        id: marsRover.id,
        position: marsRover.getPosition(),
        timestamp: new Date().getTime()
      }
    })
    
    return responses.success({ rovers })
  } catch (err) {
    return responses.error(err)
  }
}
