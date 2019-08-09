'use strict'

const indexListTemplate = require('./../templates/list-item.handlebars')

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
    $('#message').hide()
  }, 4000)
}

// CRUD Success and Failure Messages
const onIndexSuccess = function (data) {
  $('#message').show()
  const indexListContent = indexListTemplate({ listItems: data.listItems })
  $('.content').html(indexListContent)
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onIndexFailure = function (error) {
  $('#message').show()
  $('#message').text('Error getting lists')
  console.error('onIndexFailure ran. Error is :', error)
}

const onCreateSuccess = function (data) {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('List Successfully Created!')
  hideMessaging()
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Creating List, Try Again')
  hideMessaging()
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').show()
  $('#message').text('List Successfully deleted')
  $('.content').empty()
  hideMessaging()
  console.log('list successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').show()
  $('#message').text('Error Deleting List, Try Again')
  hideMessaging()
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Updated List Successfully')
  hideMessaging()
  console.log('list successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Updating List, Try Again')
  hideMessaging()
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
