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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
