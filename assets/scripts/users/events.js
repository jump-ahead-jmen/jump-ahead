'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function () {
  event.preventDefault()
  console.log('on sign up function works')
  // event.target is the same as this in the parameter below
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function () {
  event.preventDefault()
  // event.target is the same as this in the parameter below
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onViewOrgInfo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onViewOrgInfo is running')
  console.log('data is', data)
  console.log('data.users is', data.users)
  api.getUser(data.users.user_id)
    .then(response => {
      console.log('response is ', response)
    })
  $('#content').text(data)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#organizations-to-view').on('submit', onViewOrgInfo)
}

module.exports = {
  addHandlers
}
