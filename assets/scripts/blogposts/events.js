'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onBlogPostCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostCreate(data)
    .then(ui.blogPostCreateSuccess)
    .catch(ui.blogPostCreateFailure)
}
const onBlogPostShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostShow(data)
    .then(ui.blogPostShowSuccess)
    .catch(ui.blogPostShowFailure)
}
const onBlogPostIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostIndex(data)
    .then(ui.blogPostIndexSuccess)
    .catch(ui.blogPostIndexFailure)
}
const onBlogPostUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostUpdate(data)
    .then(() => ui.blogPostUpdateSuccess())
    // .then(() => api.blogPostShow())
    // .then(ui.blogPostShowSuccess)
    .catch(ui.blogPostUpdateFailure)
}

const onBlogPostDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.blogPostDelete(data)
    .then(ui.blogPostDeleteSuccess)
    .catch(ui.blogPostDeleteFailure)
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
  onBlogPostUpdate
}
