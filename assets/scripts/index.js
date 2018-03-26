'use strict'

// const config = require('./config')
const userEvents = require('./users/events.js')
const webpageEvents = require('./webpages/events.js')
const blogPostEvents = require('./blogposts/events.js')
const userDropdown = require('./users/user-dropdown.js')
const getFormFields = require('../../lib/get-form-fields')

$(() => {
  userDropdown()
  userEvents.addHandlers()
  webpageEvents.addHandlers()
  blogPostEvents.addHandlers()
  $('#organizations-to-view').on('submit', () => {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log('dropdown submit worked')
    console.log('data is', data)
    $('#content').text(data)
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
