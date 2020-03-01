'use strict'

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

    console.log('data= ', data)
    console.log('running')
    return responses.success('success')
  } catch (err) {
    return responses.error(err)
  }
}
