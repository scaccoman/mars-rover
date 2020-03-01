'use strict'

const responses = require('../libs/responses')

module.exports = async event => {
  try {
    if (!event || !event.body) {
      throw new Error('Please provide a payload')
    }

    const data = JSON.parse(event.body)
    console.log('data= ', data)
    console.log('running')
    return responses.success('success')
  } catch (err) {
    console.error(err)
    return responses.error(err)
  }
}
