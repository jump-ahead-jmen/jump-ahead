'use strict'

const webpagesApi = require('./webpages/api.js')
// const webpagesEvents = require('./webpages/events.js')
const webpagesUI = require('./webpages/ui.js')
const blogPostsApi = require('./blogposts/api.js')
const blogPostsUI = require('./blogposts/ui.js')
const viewMain = require('./basepage.js')

let deletionID

const identifyWebPageToRemove = function (event) {
  event.preventDefault()
  deletionID = event.target.dataset.id
  $('#confirmDeleteWebpageModal').modal('show')
}

const removeWebPage = function (event) {
  webpagesApi.deleteWebpage(deletionID)
    .then(webpagesUI.deleteWebpageSuccess)
    .then(viewMain.goBackToMain)
    .catch(webpagesUI.deleteWebpageFailure)
  // .then(webpagesEvents.onWebpageMaintainedIndex)
  // .catch(webpagesUI.webpageDeleteFailure)
}

const identifyBlogPostToRemove = function (event) {
  event.preventDefault()
  // currentEvent = event
  deletionID = event.target.dataset.id
  $('#confirmDeleteBlogPostModal').modal('show')
}

const removeBlogPost = function (event) {
  blogPostsApi.blogPostDelete(deletionID)
    .then(viewMain.goBackToMain)
  // .then($('#newcontent').find(`[data-id='${deletionID}']`).hide())
  // .catch(blogPostsUI.blogPostDeleteFailure)
    .then(blogPostsUI.blogPostDeleteSuccess)
    .catch(blogPostsUI.blogPostDeleteFailure)
}

const addHandlers = () => {
  $('body').on('click', '.webpage-delete', identifyWebPageToRemove)
  $('.webpageDeleteConfirmButton').on('click', removeWebPage)
  $('body').on('click', '.blogPost-delete', identifyBlogPostToRemove)
  $('.blogPostDeleteConfirmButton').on('click', removeBlogPost)
}

module.exports = {
  addHandlers
}
