'use strict'

const uuid = require('uuid/v1')
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

    const response = {
      id: uuid(),
      rovers: data.rovers.map(rover => {
        const instructions = rover.instructions.split('')
        const marsRover = new MarsRover(rover, data.plateau.gridSize)

        instructions.forEach(instruction => {
          if (instruction === 'M') return marsRover.move()
          return marsRover.turn(instruction)
        })

        return {
          roverId: marsRover.id,
          position: marsRover.getPosition()
        }
      })
    }

    if (!validate.response(response)) {
      throw new Error(JSON.stringify(validate.response.errors))
    }
    
    return responses.success(response)
  } catch (err) {
    return responses.error(err)
  }
}
