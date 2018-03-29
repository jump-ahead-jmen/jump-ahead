'use strict'

const config = require('../config')
const store = require('../store')

let token

const getWebpages = function () {
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

const getWebpage = function (data) {
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
    url: config.apiUrl + '/webpages/' + data,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const getOwnedWebpages = function (data) {
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
    url: config.apiUrl + '/ownedwebpages/' + data,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const deleteWebpage = function (data) {
  // if (data.webpage) {
  //   id = data.webpage.id
  // } else {
  //   id = data
  // }
  return $.ajax({
    url: config.apiUrl + '/webpages/' + data,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createWebpage = function (data) {
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

const updateWebpage = function (data) {
  console.log('api updatewp data is', data)
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
  getWebpages,
  getWebpage,
  getOwnedWebpages,
  deleteWebpage,
  createWebpage,
  updateWebpage
}
