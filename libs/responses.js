'use strict';

module.exports = {

  /**
   * Respond with a 200 success code and message.
   *
   * @param data
   * @param code
   * @returns
   */
  success: (data, code) => {

    if (!data) {
      throw new Error('I do not have data to return, please supply');
    }

    return {
      statusCode: code ? code : 200,
      headers: {
        'Access-Control-Allow-Origin': process.env.CORS_URL || '*'
      },
      body: JSON.stringify(data)
    }
  },

  /**
   * Response with a generic 400 code or a passed in statusCode.
   *
   * @param err
   * @returns obj
   */
  error: err => {
    err = err || null;

    console.error(err);

    return {
      statusCode: err && err.statusCode ? err.statusCode : 400,
      headers: {
        'Access-Control-Allow-Origin': process.env.CORS_URL || '*'
      },
      body: JSON.stringify({
        'message': err && err.message ? err.message : err,
        'errors': err && err.errors ? err.errors : null
      })
    };
  }
};