'use strict'

const indexListTemplate = require('./../templates/list-item.handlebars')
const listHeaderTemplate = require('./../templates/list-header.handlebars')
const store = require('./../store')

const filterCompleteSuccess = function (data) {
  const completed = data.listItems.filter(currentListItem => currentListItem.completed)
  const indexCompleted = indexListTemplate({
    listItems: completed
  })
  $('.content').html(indexCompleted)
}

const filterIncompleteSuccess = function (data) {
  const incompleted = data.listItems.filter(currentListItem => !currentListItem.completed)
  const indexIncompleted = indexListTemplate({
    listItems: incompleted
  })
  $('.content').html(indexIncompleted)
}

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
    const indexListContent = indexListTemplate({
      listItems: data.listItems
    })
    $('.content').html(indexListContent)
  }
}

const onIndexFailure = function () {
  $('#message').show()
  $('#message').text('Error getting lists')
}

const onCreateSuccess = function (data) {
  $('#create').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('List Successfully Created!')
  hideMessaging()
}

const onCreateFailure = function () {
  // $('#message').show()
  $('form').trigger('reset')
  $('#addItemFeedback').text('Error Creating List, Try Again')
  setTimeout(function () {
    $('#addItemFeedback').text('')
  }, 3000)
  // hideMessaging()
}

const onDeleteSuccess = function () {
  $('#message').show()
  $('#message').text('List Successfully deleted')
  $('.content').empty()
  hideMessaging()
}

const onDeleteFailure = function () {
  $('#message').show()
  $('#message').text('Error Deleting List, Try Again')
  hideMessaging()
}

const updateListSuccess = function () {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Updated List Successfully')
  hideMessaging()
}

const updateListFailure = function () {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Updating List, Try Again')
  hideMessaging()
}

const toggleCompleteFailure = () => {}

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
  resetForms,
  filterCompleteSuccess,
  filterIncompleteSuccess
}
