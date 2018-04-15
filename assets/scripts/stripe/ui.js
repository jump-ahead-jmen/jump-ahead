'use strict'

const onPurchaseSucccess = function () {
  $('#submit-webpage').show()
  $('#stripe-submit').hide()
  $('#status').text('Congratulations! You May Now Submit A Webpage')
  // function that shows submit-webpage button
}

module.exports = {
  onPurchaseSucccess
}
