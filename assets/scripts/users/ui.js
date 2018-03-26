'use strict'

const store = require('../store')
// above is for the token as well

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
}
const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
  // below is for the token
  store.user = data.user
  // $('#sign-in').val('')
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing in!')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
  // $('#sign-in').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  // $('#sign-in').val('')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on changing password!')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
