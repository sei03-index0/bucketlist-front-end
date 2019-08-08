'use strict'

// CRUD Success and Failure Messages
const onIndexSuccess = function (data) {
  $('#message').text('All lists successfully received')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onIndexFailure = function (error) {
  $('#message').text('Error getting lists')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onCreateSuccess = function (data) {
  $('#message').text('List Successfully Created!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error Creating List, Try Again')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('List Successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.content').empty()
  console.log('list successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error Deleting List, Try Again')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Updated List Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('list successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error Updating List, Try Again')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
