'use strict'

const config = require('../config')
const store = require('../store')

let token

const webpageIndex = function () {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiUrl + '/webpages',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const webpageShow = function (data) {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  // if (data.webpage) {
  //   id = data.webpage.id
  // } else {
  //   id = data
  // }
  return $.ajax({
    url: config.apiUrl + '/webpages/' + data.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const webpageDelete = function (data) {
  // if (data.webpage) {
  //   id = data.webpage.id
  // } else {
  //   id = data
  // }
  return $.ajax({
    url: config.apiUrl + '/webpages/' + data.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const webpageCreate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/webpages/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const webpageUpdate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/webpages/' + data.webpage.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  webpageIndex,
  webpageShow,
  webpageDelete,
  webpageCreate,
  webpageUpdate
}
