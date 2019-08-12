'use strict'

const indexListTemplate = require('./../templates/list-item.handlebars')
const listHeaderTemplate = require('./../templates/list-header.handlebars')
const store = require('./../store')

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
    $('#message').hide()
  }, 4000)
}

// CRUD Success and Failure Messages
const onIndexSuccess = function (data) {
  $('#message').show()
  $('.list-header').html(listHeaderTemplate)
  if (data.listItems.length === 0) {
    $('.content').html('Your list is empty, please click \'Add new item\' to add to your list.')
  } else {
    const indexListContent = indexListTemplate({ listItems: data.listItems })
    $('.content').html(indexListContent)
  }
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onIndexFailure = function (error) {
  $('#message').show()
  $('#message').text('Error getting lists')
  console.error('onIndexFailure ran. Error is :', error)
}

const onCreateSuccess = function (data) {
  $('#create').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
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
  console.error('Did not run. Error is :', error)
}

const onDeleteSuccess = function () {
  $('#message').show()
  $('#message').text('List Successfully deleted')
  $('.content').empty()
  hideMessaging()
  console.log('list successfully deleted')
}

const onDeleteFailure = function (error) {
  $('#message').show()
  $('#message').text('Error Deleting List, Try Again')
  hideMessaging()
  console.error('onDestroyFailure ran. Error is :', error)
}

const updateListSuccess = function () {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Updated List Successfully')
  hideMessaging()
  console.log('list successfully updated')
}

const updateListFailure = function (error) {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Updating List, Try Again')
  hideMessaging()
  console.error('onUpdateFailure ran. Error is :', error)
}

const toggleCompleteFailure = () => {
  console.log('Toggle complete failed')
}

const resetForms = () => {
  $('form').trigger('reset')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onDeleteSuccess,
  onDeleteFailure,
  updateListSuccess,
  updateListFailure,
  toggleCompleteFailure,
  resetForms
}
