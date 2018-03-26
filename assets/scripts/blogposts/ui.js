'use strict'

const blogPostCreateSuccess = function (data) {
  $('#message').text('Created Blog Post successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const blogPostCreateFailure = function (error) {
  $('#message').text('Error on creating blog post')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const blogPostShowSuccess = function (data) {
  $('#message').text('Showed Blog Post successfully')
  $('#message').css('background-color', 'green')
  console.log(data.blogPost)
  $('#content').html(data.blogPost.title + ' ' + data.blogPost.body)
}

const blogPostShowFailure = function (error) {
  $('#message').text('Error on showinging blog post')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const blogPostIndexSuccess = function (data) {
  $('#message').text('Indexed Blog Posts successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
  $('#content').text(data)
}

const blogPostIndexFailure = function (error) {
  $('#message').text('Error on indexing blog post')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const blogPostUpdateSuccess = function (data) {
  $('#message').text('Updated Blog Post successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const blogPostUpdateFailure = function (error) {
  $('#message').text('Error on updating blog post')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const blogPostDeleteSuccess = function (data) {
  $('#message').text('Deleted Blog Post successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const blogPostDeleteFailure = function (error) {
  $('#message').text('Error on deleting blog post')
  $('#message').css('background-color', 'red')
  console.error(error)
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
  blogPostDeleteFailure
}
