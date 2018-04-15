'use strict'
/* global StripeCheckout */

const api = require('./api')
const ui = require('./ui.js')

const checkout = function () {
  const handler = StripeCheckout.configure({
    key: 'pk_test_SCHqWT1FpC27Au5YxMFteFXJ',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function (token) {
      const tokenData = {
        token: {
          token_id: token.id,
          total: 1999
        }
      }
      api.createToken(tokenData)
        .then((data) => {
          return data
        })
        .then(ui.onPurchaseSucccess)
        .catch((err) => {
          console.error('Error is', err)
        })
    }
  })

  document.getElementById('stripe-submit').addEventListener('click', function (event) {
    handler.open({
      name: 'JUMP AHEAD',
      description: 'Webpage Purchase',
      amount: 1999
    })
    event.preventDefault()
  })
  window.addEventListener('popstate', function () {
    handler.close()
  })
}
module.exports = {
  checkout
}
