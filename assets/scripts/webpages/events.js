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
  console.log(data)
  const webpage = data.webpage
  // console.log(event)
  api.getWebpage(webpage.id)
    .then(ui.getWebpageSuccess)
    .catch(ui.getWebpageFailure)
}

const onUpdateWebpage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateWebpage(data)
    .then(ui.updateWebpageSuccess)
    .catch(ui.updateWebpageFailure)
}

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
