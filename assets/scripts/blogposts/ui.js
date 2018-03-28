'use strict'
const blogInfoTemplate = require('../templates/blog-posts.handlebars')
const blogInfoTemplateWithButtons = require('../templates/blog-posts-with-buttons.handlebars')
const store = require('../store.js')
let blogInfoData

const blogPostCreateSuccess = function (data) {
  $('#message').text('Created Blog Post successfully')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
}

const blogPostCreateFailure = function (error) {
  $('#message').text('Error on creating blog post')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
  console.error(error)
}

const blogPostShowSuccess = function (data) {
  $('#message').text('Showed Blog Post successfully')
  $('#message').css('background-color', 'green')
  console.log(data.blogPost)
  $('#content').html(data.blogPost.title + ' ' + data.blogPost.body)
  $('form').find('input:not([type="submit"])').val('')
}

const blogPostShowFailure = function (error) {
  $('#message').text('Error on showinging blog post')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
  console.error(error)
}

const blogPostIndexSuccess = function (data) {
  $('#message').text('Indexed Blog Posts successfully')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
  $('#content').text(data)
}

const blogPostIndexFailure = function (error) {
  $('#message').text('Error on indexing blog post')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
  console.error(error)
}

const blogPostUpdateSuccess = function (data) {
  $('#message').text('Updated Blog Post successfully')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
}

const blogPostUpdateFailure = function (error) {
  $('#message').text('Error on updating blog post')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
  console.error(error)
}

const blogPostDeleteSuccess = function (data) {
  $('#message').text('Deleted Blog Post successfully')
  $('#message').css('background-color', 'green')
  $('form').find('input:not([type="submit"])').val('')
  console.log(data)
}

const blogPostDeleteFailure = function (error) {
  $('#message').text('Error on deleting blog post')
  $('#message').css('background-color', 'red')
  $('form').find('input:not([type="submit"])').val('')
  console.error(error)
}

const showBlogPosts = function (data) {
  if (store.user) {
    if (store.user.id === store.viewed_user.user_id) {
      console.log('store.user is', store.user)
      console.log('store.viewed_user is', store.viewed_user)
      blogInfoData = blogInfoTemplateWithButtons({ blogPosts: data.blogPosts })
      $('form').find('input:not([type="submit"])').val('')
    }
  } else {
    console.log('store.user is', store.user)
    console.log('store.viewed_user is', store.viewed_user)
    blogInfoData = blogInfoTemplate({ blogPosts: data.blogPosts })
    $('form').find('input:not([type="submit"])').val('')
  }
  $('#content').html(blogInfoData)
  console.log('showBlogPosts data is', data)
  return data
}

module.exports = {
  blogPostCreateSuccess,
  blogPostCreateFailure,
  blogPostIndexSuccess,
  blogPostIndexFailure,
  blogPostShowSuccess,
  blogPostShowFailure,
  blogPostUpdateSuccess,
  blogPostUpdateFailure,
  blogPostDeleteSuccess,
  blogPostDeleteFailure,
  showBlogPosts
}
