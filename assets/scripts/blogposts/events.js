'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const userApi = require('../users/api.js')

const onBlogPostCreate = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostCreate(data)
    .then(ui.blogPostCreateSuccess)
    .catch(ui.blogPostCreateFailure)
}
const onBlogPostShow = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.blogPost)
  api.blogPostShow(data)
    .then(ui.blogPostShowSuccess)
    .catch(ui.blogPostShowFailure)
}
const onBlogPostIndex = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostIndex(data)
    .then(ui.blogPostIndexSuccess)
    .catch(ui.blogPostIndexFailure)
}
const onBlogPostUpdate = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostUpdate(data)
    .then(ui.blogPostUpdateSuccess)
    .catch(ui.blogPostUpdateFailure)
}
const onBlogPostDelete = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostDelete(data)
    .then(ui.blogPostDeleteSuccess)
    .catch(ui.blogPostDeleteFailure)
}

const onShowBlogPosts = function (data) {
  // this next console log is showing an empty object
  console.log('onShowBlogPosts data is', data)
  api.getOwnedBlogposts(data.user.id)
    // .then((response) => console.log('response is', response))
    .then(ui.showBlogPosts)
    .catch(console.error)
}

const addHandlers = () => {
  $('#create-blogPost').on('submit', onBlogPostCreate)
  $('#show-blogPost').on('submit', onBlogPostShow)
  $('#index-blogPost').on('submit', onBlogPostIndex)
  $('#update-blogPost').on('submit', onBlogPostUpdate)
  $('#delete-blogPost').on('submit', onBlogPostDelete)
}

module.exports = {
  addHandlers,
  onShowBlogPosts
}
