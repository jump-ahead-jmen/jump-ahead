const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateWebpage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createWebpage(data)
    .then(ui.createWebpageSuccess)
    .catch(ui.createcreateWebpageFailure)
}

const onGetWebpages = function (event) {
  event.preventDefault()
  api.getWebpages()
    .then(ui.getWebpagesSuccess)
    .catch(ui.getWebpagesFailure)
}

const onGetWebpage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const webpage = data.webpage
  // console.log(event)
  api.getWebpage(webpage.id)
    .then(ui.getWebpageSuccess)
    .catch(ui.getWebpageFailure)
}

const onUpdateWebpage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('events onupdate data is', data)
  api.updateWebpage(data)
    .then(() => ui.updateWebpageSuccess(data))
    .then((data) => api.getWebpage(data.webpage.id))
    .catch(ui.updateWebpageFailure)
}

// const onBlogPostUpdate = function () {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.blogPostUpdate(data)
//     .then(() => ui.blogPostUpdateSuccess())
//     // .then(() => api.blogPostShow())
//     // .then(ui.blogPostShowSuccess)
//     .catch(ui.blogPostUpdateFailure)
// }

const onDeleteWebpage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const webpage = data.webpage
  api.deleteWebpage(webpage.id)
    .then(ui.deleteWebpageSuccess)
    .catch(ui.deleteWebpageFailure)
}

const addHandlers = () => {
  $('#create-webpage').on('submit', onCreateWebpage)
  $('#get-webpages').on('submit', onGetWebpages)
  $('#get-webpage').on('submit', onGetWebpage)
  $('#update-webpage').on('submit', onUpdateWebpage)
  $('#delete-webpage').on('submit', onDeleteWebpage)
}

module.exports = {
  addHandlers,
  onUpdateWebpage
}
