'use strict'
const config = require('../config')

const createToken = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tokens',
    method: 'POST',
    data
  })
}

module.exports = {
  createToken
}
