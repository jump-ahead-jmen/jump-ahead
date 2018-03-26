'use strict'

// const store = require('../store')
// above is for the token as well

const createWebpageSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const createWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')
}
const getWebpagesSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const getWebpagesFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing in!')
  $('#message').css('background-color', 'red')
}

const getWebpageSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').css('background-color', 'green')
}

const getWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on changing password!')
  $('#message').css('background-color', 'red')
}

const updateWebpageSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').css('background-color', 'green')
}

const updateWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
}

const deleteWebpageSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').css('background-color', 'green')
}

const deleteWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
}

module.exports = {
  createWebpageSuccess,
  createWebpageFailure,
  getWebpagesSuccess,
  getWebpagesFailure,
  getWebpageSuccess,
  getWebpageFailure,
  updateWebpageSuccess,
  updateWebpageFailure,
  deleteWebpageSuccess,
  deleteWebpageFailure
}
