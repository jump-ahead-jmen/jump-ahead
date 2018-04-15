'use strict'

const store = require('../store.js')

const submitHide = function () {
  $('#submit-webpage').hide()
  $('#stripe-submit').show()
  $('#status').text('Must First Submit a Purchase Before Creating a Webpage!')
}

const createWebpageSuccess = function (data) {
  $('#create-webpage-modal').modal('hide')
  $('#message').text('Created webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  $('#content').empty()
  $('#message').delay(3000).slideToggle()
}

const createWebpageFailure = function (error) {
  store.error = error
  $('#create-webpage-modal').modal('hide')
  $('#message').text('Error on creating a webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
  $('#message').delay(3000).slideToggle()
}

const getWebpagesSuccess = function (data) {
  $('#message').text('Retrieved webpages successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
}

const getWebpagesFailure = function (error) {
  store.error = error
  $('#message').text('Error on retrieving webpages!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
}

const getWebpageSuccess = function (data) {
  $('#message').text('Retrieved webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
}

const getWebpageFailure = function () {
  // store.error = error
  $('#message').text('Error on retrieving webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
}

const updateWebpageSuccess = function (data) {
  $('#update-webpage-modal').modal('hide')
  $('#message').text('Updated webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  $('#message').delay(3000).slideToggle()
  $('#content').empty()
  return data
}

const updateWebpageFailure = function () {
  // console.log(error)
  $('#update-webpage-modal').modal('hide')
  $('#message').text('Error on updating webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
  $('#message').delay(3000).slideToggle()
}

const deleteWebpageSuccess = function (data) {
  $('#confirmDeleteWebpageModal').modal('hide')
  $('#message').text('Deleted webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  $('#message').delay(3000).slideToggle()
}

const deleteWebpageFailure = function () {
  // console.log(error)
  $('#confirmDeleteWebpageModal').modal('hide')
  $('#message').text('Error on deleting webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
  $('#message').delay(3000).slideToggle()
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
  deleteWebpageFailure,
  submitHide
}
