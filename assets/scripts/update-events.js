'use strict'

const webpagesApi = require('./webpages/api.js')
const webpagesEvents = require('./webpages/events.js')
const webpagesUI = require('./webpages/ui.js')
const blogPostsApi = require('./blogposts/api.js')
const blogPostsEvents = require('./blogposts/events.js')
const blogPostsUI = require('./blogposts/ui.js')

const updateWebpageForm = require('./templates/webpage-update-form.handlebars')
const updateBlogPostForm = require('./templates/blogPost-update-form.handlebars')

let updateID

const identifyWebpageToUpdate = function (event) {
  event.preventDefault()
  console.log('clicked')
  $('#update-webpage-modal').modal('show')
  updateID = event.target.dataset.id
  webpagesApi.getWebpage(updateID)
    .then(populateWebpageUpdateForm)
    .catch(webpagesUI.webpageUpdateFailure)
}

const identifyBlogPostToUpdate = function (event) {
  event.preventDefault()
  console.log('clicked')
  $('#update-blogPost-modal').modal('show')
  updateID = event.target.dataset.id
  blogPostsApi.blogPostShow(updateID)
    .then(populateBlogPostUpdateForm)
    .catch(blogPostsUI.blogPostUpdateFailure)
}

const populateWebpageUpdateForm = function (response) {
  const updateWebpagesHtml = updateWebpageForm({ webpages: response })
  $('#update-webpage-span').html(updateWebpagesHtml)
  $('#update-webpage').on('submit', webpagesEvents.onUpdateWebpage)
}

const populateBlogPostUpdateForm = function (response) {
  const updateBlogPostsHtml = updateBlogPostForm({ blogPosts: response })
  console.log(blogPostsEvents.onBlogPostUpdate)
  console.log(updateBlogPostsHtml)
  $('#update-blogpost-span').html(updateBlogPostsHtml)
  $('#update-blogPost').on('submit', blogPostsEvents.onBlogPostUpdate)
}

const addHandlers = () => {
  $('body').on('click', '.webpage-update', identifyWebpageToUpdate)
  $('body').on('click', '.blogPost-update', identifyBlogPostToUpdate)
}

module.exports = {
  addHandlers
}
