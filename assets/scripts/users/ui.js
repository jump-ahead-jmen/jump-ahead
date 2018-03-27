'use strict'
const userDropdown = require('./user-dropdown')
const store = require('../store')
const orgInfoTemplate = require('../templates/show-base-page.handlebars')
const webpageLinksTemplate = require('../templates/page-links.handlebars')
const showOneLinkTemplate = require('../templates/show-one-link.handlebars')
const webpageApi = require('../webpages/api.js')
// above is for the token as well

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')

  userDropdown()
  console.log(data)
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
}
const signInSuccess = function (data) {
  $('.signed-in-buttons').show()
  $('.signed-out-buttons').hide()
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
  $('.signed-in-buttons').hide()
  $('.signed-out-buttons').show()
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
}

const viewOrgInfo = function (data) {
  const orgInfoData = orgInfoTemplate({ users: data })
  $('#content').html(orgInfoData)
  console.log('viewOrgInfo data is', data)
  return data
}

const showWebpageLinks = function (data) {
  const webpageLinks = webpageLinksTemplate({ webpages: data.webpages })
  $('#page-links').html(webpageLinks)
  $('.individual-page-link').on('click', showWebpageByLink)
  console.log('fuck data, ', data.webpages[0].id)
  console.log('showWebPageLinks data is', data)
  console.log('data.webpages[0].title is ', data.webpages[0].title)
}
// () => $('#content').html(showOneLinkTemplate({ webpages: data.webpages }))

const showWebpageByLink = function (event) {
  const id = $(event.target).data('id')
  webpageApi.getWebpage(id)
    .then((response) => {
      console.log(response)
      return response
    }
    )
    .then((data) => {
      const webpageLink = showOneLinkTemplate({ webpage: data.webpage })
      $('#content').html(webpageLink)
    })
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  viewOrgInfo,
  showWebpageLinks,
  showWebpageByLink
}
