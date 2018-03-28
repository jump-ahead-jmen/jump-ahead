'use strict'

// const store = require('../store')
// above is for the token as well

const createWebpageSuccess = function (data) {
  $('#create-webpage-modal').modal('hide')
  $('#message').text('Created webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
  console.log('ui create wp works')
}

const createWebpageFailure = function (error) {
  console.log(error)
  $('#create-webpage-modal').modal('hide')
  $('#message').text('Error on error on creating a webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
}
const getWebpagesSuccess = function (data) {
  $('#message').text('Retrieved webpages successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
  console.log('this ui works')
}

const getWebpagesFailure = function (error) {
  console.log(error)
  $('#message').text('Error on retrieving webpages!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
}

const getWebpageSuccess = function (data) {
  $('#message').text('Retrieved webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  console.log('this ui works')
}

const getWebpageFailure = function (error) {
  console.log(error)
  $('#message').text('Error on retrieving webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
}

const updateWebpageSuccess = function (data) {
  $('#update-webpage-modal').modal('hide')
  $('#message').text('Updated webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  console.log('this ui works')
}

const updateWebpageFailure = function (error) {
  console.log(error)
  $('#update-webpage-modal').modal('hide')
  $('#message').text('Error on updating webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
}

const deleteWebpageSuccess = function (data) {
  $('#confirmDeleteWebpageModal').modal('hide')
  $('#message').text('Deleted webpage successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('form').find('input:not([type="submit"])').val('')
  console.log('this ui works')
}

const deleteWebpageFailure = function (error) {
  console.log(error)
  $('#confirmDeleteWebpageModal').modal('hide')
  $('#message').text('Error on deleting webpage!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('form').find('input:not([type="submit"])').val('')
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
