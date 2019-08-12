'use strict'

const store = require('./../store')

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
    $('#message').hide()
  }, 3000)
}
// Auth Success and Failure Messages
const onSignUpSuccess = (data) => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Successfully Signed Up!')
  hideMessaging()
}

const onSignUpFailure = () => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Signing Up, Try Again')
  hideMessaging()
}

const onSignInSuccess = (data) => {
  // $('.sign-up').hide()
  $('.landing').hide()
  $('.view-listItems').show()
  // $('body').addClass('.loggedIn')
  // $('html').addClass('.loggedIn')
  // $('.loggedIn').show()
  $('#auth-menu').show()
  $('#message1').hide()
  $('#message0').show()
  $('#message').show()
  $('form').trigger('reset')
  store.user = data.user
  $('#message').text('Successfully Signed In!')
  hideMessaging()
  $('.body').css('background-image', 'none')
}

const onSignInFailure = () => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Sign In NOT Successful')
  hideMessaging()
}

const onChangePasswordSuccess = (data) => {
  $('#message').show()
  $('#change-password-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
  $('#message').text('Changed Password Successfully')
  hideMessaging()
}

const onChangePasswordFailure = () => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Changing Passwords, Try Again')
  hideMessaging()
}

const onSignOutSuccess = (data) => {
  $('.sign-up').show()
  $('.sign-in').show()
  $('.landing').show()
  $('#auth-menu').hide()
  $('#message').show()
  $('#message0').hide()
  $('#message1').show()
  $('.content').html('')
  $('.list-header').html('')
  $('#message').text('Signed Out Successfully!')
  hideMessaging()
  $('.body').css('background-image', 'url(./images/bucket.jpg)')
}

const onSignOutFailure = () => {
  $('#message').show()
  $('#message').text('Error Signing Out')
  hideMessaging()
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
