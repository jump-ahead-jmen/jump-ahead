'use strict'
/* global StripeCheckout */

const api = require('./api')

// const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')
// stripe script that adds modal to html and allows for ajax request
// to get a users token to be stored for their purchase
// Configures the stripe API to enable token generation and checkout processing
// Stripe generates a token based on given user/price data, which we then send
// to our API. Then in our API, a checkout request is made with the token to
// Stripe's API.
// Also adds an event listener to the stripe-submit button, so that when
// clicked, opens the stripe modal to purchase website
const checkout = function () {
  const handler = StripeCheckout.configure({
    key: 'pk_test_SCHqWT1FpC27Au5YxMFteFXJ',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function (token) {
      // This data is used by Stripe to generate a token
      const tokenData = {
        token: {
          token_id: token.id,
          total: 1999
        }
      }
      // now make a Token post request to our API with the token generated by
      // Stripe
      api.createToken(tokenData)
        .then((data) => {
          console.log('Payment Sent', data)
          return data
        })
        .catch((err) => {
          console.error('Error is', err)
        })
    }
  })
  // adds an event listener to the stripe-submit button, so that when
  // clicked, opens the stripe modal for web page purchase
  document.getElementById('stripe-submit').addEventListener('click', function (event) {
    // Open Stripe Checkout with further options:
    handler.open({
      // These values are what the user sees in Stripe's Checkout modal
      name: 'JUMP AHEAD',
      description: 'Webpage Purchase',
      amount: 1999
    })
    event.preventDefault()
  })
  // Close Stripe Checkout on page navigation:
  window.addEventListener('popstate', function () {
    handler.close()
  })
}
module.exports = {
  checkout
}