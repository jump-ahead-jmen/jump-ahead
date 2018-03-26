'use strict'

// const store = require('../store')
// above is for the token as well

const createWebpageSuccess = function (data) {
  $('#message').text('Webpage created Successfully!')
  $('#message').css('background-color', 'green')
  console.log(data)
  console.log('ui create wp works')
}

const createWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on creating webpage!')
  $('#message').css('background-color', 'red')
}
const getWebpagesSuccess = function (data) {
  $('#message').text('Retrieved pages Successfully!')
  $('#message').css('background-color', 'green')
  console.log(data)
  console.log('this ui works')
}

const getWebpagesFailure = function (error) {
  console.log(error)
  $('#message').text('Error on retrieving pages!')
  $('#message').css('background-color', 'red')
}

const getWebpageSuccess = function (data) {
  $('#message').text('brought back 1 page Successfully!')
  $('#message').css('background-color', 'green')
  console.log('this ui works')
}

const getWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on getting a webpage!')
  $('#message').css('background-color', 'red')
}

const updateWebpageSuccess = function (data) {
  $('#message').text('Updated Successfully!')
  $('#message').css('background-color', 'green')
  console.log('this ui works')
}

const updateWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on updating!')
  $('#message').css('background-color', 'red')
}

const deleteWebpageSuccess = function (data) {
  $('#message').text('Deleted Successfully!')
  $('#message').css('background-color', 'green')
  console.log('this ui works')
}

const deleteWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on deleting!')
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
