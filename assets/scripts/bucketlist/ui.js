'use strict'

const indexListTemplate = require('./../templates/list-item.handlebars')
const listHeaderTemplate = require('./../templates/list-header.handlebars')
const store = require('./../store')

const filterCompleteSuccess = function (data) {
  const completed = data.listItems.filter(currentListItem => currentListItem.completed)
  if (completed.length === 0) {
    $('.content').html('No filtered results.')
  } else {
    const indexCompleted = indexListTemplate({
      listItems: completed
    })
    $('.content').html(indexCompleted)
  }
  $('#filterComplete').addClass('active')
  $('#filterIncomplete').removeClass('active')
  $('#filterAll').removeClass('active')
}

const filterIncompleteSuccess = function (data) {
  const incomplete = data.listItems.filter(currentListItem => !currentListItem.completed)
  if (incomplete.length === 0) {
    $('.content').html('No filtered results.')
  } else {
    const indexIncomplete = indexListTemplate({
      listItems: incomplete
    })
    $('.content').html(indexIncomplete)
  }
  $('#filterComplete').removeClass('active')
  $('#filterIncomplete').addClass('active')
  $('#filterAll').removeClass('active')
}

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
    // ('#message').hide()
  }, 3000)
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
  $('#message').show()
  $('form').trigger('reset')
  $('#create-list-feedback').text('Error Creating List, Try Again')
  setTimeout(function () {
    $('#create-list-feedback').html('')
  }, 3000)
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
