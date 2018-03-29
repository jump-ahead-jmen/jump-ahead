const api = require('./api')
const usersDropdownTemplate = require('../templates/user-dropdown.handlebars')
const compare = require('../customsorter.js')

const getUserDropdown = function () {
  api.userIndex()
    .then(function (response) {
      response.users.sort(compare)
      const usersDropdownHtml = usersDropdownTemplate({ users: response.users })
      $('.user-dropdown').html(usersDropdownHtml)
    }
    )
}

module.exports = getUserDropdown
