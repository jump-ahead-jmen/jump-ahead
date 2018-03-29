const blogUi = require('./blogposts/ui.js')
const blogApi = require('./blogposts/api.js')
const webpageApi = require('./webpages/api.js')
const orgInfoTemplate = require('./templates/show-base-page.handlebars')
const showOnePageTemplate = require('./templates/show-one-page.handlebars')
const showOnePageTemplateWithButtons = require('./templates/show-one-page-with-buttons.handlebars')
const webpageLinksTemplate = require('./templates/page-links.handlebars')
const store = require('./store.js')
const userApi = require('./users/api.js')
let webpage

const viewOrgInfo = function (data) {
  const orgInfoData = orgInfoTemplate({ users: data })
  $('#content').html(orgInfoData)
  console.log('viewOrgInfo data is', data)
  console.log('data.user.id is', data.user.id)
  console.log('data.user.organization is', data.user.organization)
  store.viewed_user.organization = data.user.organization
  console.log('MAIN VIEWED')
  $('.showblogbutton').on('click', () => onShowBlogPosts(data))
  return data
}

const showWebpageLinks = function (data) {
  const webpageLinks = webpageLinksTemplate({ webpages: data.webpages })
  $('#page-links').html(webpageLinks)
  $('.individual-page-link').on('click', () => console.log('click'))
  $('.individual-page-link').on('click', showWebpageByLink)
}

const showWebpageByLink = function (event) {
  const id = $(event.target).data('id')
  webpageApi.getWebpage(id)
    .then((response) => {
      console.log(response)
      return response
    }
    )
    .then((data) => {
      if (store.user) {
        if (store.user.id === store.viewed_user.user_id) {
          console.log('store.user is', store.user)
          console.log('store.viewed_user is', store.viewed_user)
          webpage = showOnePageTemplateWithButtons({ webpage: data.webpage,
            organization: store.viewed_user.organization})
        }
      } else {
        console.log('store.user is', store.user)
        console.log('store.viewed_user is', store.viewed_user)
        console.log('data is', data)
        console.log('data.webpage.title is', data.webpage.title)
        webpage = showOnePageTemplate({ webpage: data.webpage,
          organization: store.viewed_user.organization})
      }
      $('#content').html(webpage)
    })
    .then(() => $('#back-link').on('click', goBackToMain))
}

const goBackToMain = function () {
  console.log('viewed_user.id is', store.viewed_user)
  console.log('userApi.getUser is', userApi.getUser)
  console.log(store.viewed_user.user_id)
  userApi.getUser(store.viewed_user.user_id)
    .then(viewOrgInfo)
    .then(response => {
      console.log('response is', response)
      console.log('userApi is', userApi)
      return response
    })
    .then(() => {
      return webpageApi.getOwnedWebpages(store.viewed_user.user_id)
    })
    .then(showWebpageLinks)
    .catch(console.error)
}

const onShowBlogPosts = function (data) {
  // this next console log is showing an empty object
  console.log('onShowBlogPosts data is', data)
  blogApi.getOwnedBlogposts(data.user.id)
    // .then((response) => console.log('response is', response))
    .then(blogUi.showBlogPosts)
    .then(() => $('#back-link').on('click', goBackToMain))
    .catch(console.error)
}

module.exports = {
  viewOrgInfo,
  showWebpageLinks,
  showWebpageByLink,
  goBackToMain
}
