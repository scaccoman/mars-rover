'use strict'

module.exports.config = () => {

  const stage = process.env.NODE_ENV || 'dev'

  return {
    'api': 'APIMarsRover',
    'stage': stage,
    'schema': 'Contact'
  }
}