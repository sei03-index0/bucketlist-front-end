'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('List successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating list')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All lists successfully received')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting list')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One list successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting list')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('List successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.content').empty()
  console.log('list successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting list')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('List successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('list successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating list')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
