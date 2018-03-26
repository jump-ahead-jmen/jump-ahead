'use strict'

const config = require('../config')
const store = require('../store')

let token

const blogPostIndex = function () {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiUrl + '/blogPosts',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const blogPostShow = function (data) {
  const id = data.blogPost.id
  token = ''
  if (store.user) {
    token = store.user.token
  }
  // if (data.blogPost) {
  //   id = data.blogPost.id
  // } else {
  //   id = data
  // }
  return $.ajax({
    url: config.apiUrl + '/blogPosts/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const blogPostDelete = function (data) {
  const id = data.blogPost.id
  // if (data.blogPost) {
  //   id = data.blogPost.id
  // } else {
  //   id = data
  // }
  return $.ajax({
    url: config.apiUrl + '/blogPosts/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const blogPostCreate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogPosts/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const blogPostUpdate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogPosts/' + data.blogPost.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  blogPostIndex,
  blogPostShow,
  blogPostDelete,
  blogPostCreate,
  blogPostUpdate
}
