'use strict'

const indexMemoriesTemplate = require('./../templates/memories.handlebars')
const memoriesHeaderTemplate = require('../templates/memories-header.handlebars')
const store = require('../store')

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
    // ('#message').hide()
  }, 3000)
}

// CRUD Success and Failure Messages
const onIndexSuccess = function (data) {
  console.log(data)
  $('#message').show()
  $('.list-header').html(memoriesHeaderTemplate)
  if (data.memories.length === 0) {
    $('.content').html('Your Memories are empty, please click \'Add New Memory\'.')
  } else {
    const indexMemoriesContent = indexMemoriesTemplate({
      memories: data.memories
    })
    $('.content').html(indexMemoriesContent)
  }
}

const onIndexFailure = function () {
  $('#message').show()
  $('#message').text('Error getting memories')
}

const onCreateSuccess = function (data) {
  $('#create').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Memory Successfully Created!')
  hideMessaging()
}

const onCreateFailure = function () {
  $('#message').show()
  $('form').trigger('reset')
  $('#create-list-feedback').text('Error Creating Memory, Try Again')
  setTimeout(function () {
    $('#create-list-feedback').html('')
  }, 3000)
}

const updateSuccess = function () {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Updated Memory Successfully')
  hideMessaging()
}

const updateFailure = function () {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Updating Memory, Try Again')
  hideMessaging()
}

const onDeleteSuccess = function () {
  $('#message').show()
  $('#message').text('Memory successfully deleted')
  $('.content').empty()
  hideMessaging()
}

const onDeleteFailure = function () {
  $('#message').show()
  $('#message').text('Error Deleting Memory, Try Again')
  hideMessaging()
}

const resetForms = () => {
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onCreateSuccess,
  onCreateFailure,
  onDeleteSuccess,
  onDeleteFailure,
  updateSuccess,
  updateFailure,
  resetForms
}
