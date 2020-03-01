'use strict';

module.exports.config = () => {

  const stage = process.env.NODE_ENV || 'dev';

  return {
    'api': 'APIContact',
    'stage': stage,
    'schema': 'Contact'
  };
};