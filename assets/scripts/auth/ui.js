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
  console.log('Sign up success')
}

const onSignUpFailure = (error) => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Signing Up, Try Again')
  hideMessaging()
  console.log('Sign up failed', error)
}

const onSignInSuccess = (data) => {
  // $('.sign-up').hide()
  $('.landing').hide()
  // $('body').addClass('.loggedIn')
  // $('html').addClass('.loggedIn')
  // $('.loggedIn').show()
  $('#sign-out').show()
  $('.dropdown-content').hide()
  $('#message').show()
  $('#hide-password').show()
  $('form').trigger('reset')
  store.user = data.user
  $('#message').text('Successfully Signed In!')
  hideMessaging()
  console.log('Sign in success')
  $('.body').css('background-image', 'none')
}

const onSignInFailure = (error) => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Sign In NOT Successful')
  hideMessaging()
  console.error('Sign in failed', error)
}

const onChangePasswordSuccess = (data) => {
  $('#message').show()
  $('#change-password-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('form').trigger('reset')
  $('#message').text('Changed Password Successfully')
  hideMessaging()
  console.log('Change password success')
}

const onChangePasswordFailure = (error) => {
  $('#message').show()
  $('form').trigger('reset')
  $('#message').text('Error Changing Passwords, Try Again')
  hideMessaging()
  console.error('Change password failed', error)
}

const onSignOutSuccess = (data) => {
  $('.sign-up').show()
  $('.sign-in').show()
  $('.landing').show()
  // $('.dropdown-content').show()
  $('#sign-out').hide()
  $('#message').show()
  $('#hide-password').hide()
  $('.content').html('')
  $('#message').text('Signed Out Successfully!')
  hideMessaging()
  console.log('Sign out success')
  $('.body').css('background-image', 'url(./images/bucket.jpg)')
}

const onSignOutFailure = (error) => {
  $('#message').show()
  $('#message').text('Error Signing Out')
  hideMessaging()
  console.error('Sign out failed', error)
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
