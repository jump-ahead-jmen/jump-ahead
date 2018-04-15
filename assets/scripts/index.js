'use strict'

// const config = require('./config')
const userEvents = require('./users/events.js')
const webpageEvents = require('./webpages/events.js')
const blogPostEvents = require('./blogposts/events.js')
const userDropdown = require('./users/user-dropdown.js')
const deleteEvents = require('./delete-events.js')
const updateEvents = require('./update-events.js')
const stripeEvents = require('./stripe/events.js')
const $script = require('scriptjs')

$script('https://checkout.stripe.com/checkout.js', stripeEvents.checkout)

$(() => {
  userDropdown()
  userEvents.addHandlers()
  webpageEvents.addHandlers()
  blogPostEvents.addHandlers()
  deleteEvents.addHandlers()
  updateEvents.addHandlers()
  $('.modal').on('hidden.bs.modal', () => $('form').find('input:not([type="submit"])').val(''))
  $('.modal').on('hidden.bs.modal', () => $('textarea').val(''))
})
