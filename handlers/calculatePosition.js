'use strict'

module.exports = async event => {
  try {

    console.log('running')
    return { statusCode: 200, body: 'success' }
  } catch (err) {
    console.error(err)
    return { statusCode: 400, body: err.message || err }
  }
}
