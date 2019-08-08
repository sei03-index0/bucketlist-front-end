'use strict'

const store = require('./../store')

// Auth Success and Failure Messages
const onSignUpSuccess = (data) => {
  $('form').trigger('reset')
  $('#message').text('Successfully Signed Up!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('Sign up success')
}

const onSignUpFailure = (error) => {
  $('form').trigger('reset')
  $('#message').text('Error Signing Up, Try Again')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.log('Sign up failed', error)
}

const onSignInSuccess = (data) => {
  $('form').trigger('reset')
  store.user = data.user
  $('#message').text('Successfully Signed In!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('Sign in success')
}

const onSignInFailure = (error) => {
  $('form').trigger('reset')
  $('#message').text('Sign In NOT Successful')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('Sign in failed', error)
}

const onChangePasswordSuccess = (data) => {
  $('form').trigger('reset')
  $('#message').text('Changed Password Successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('Change password success')
}

const onChangePasswordFailure = (error) => {
  $('form').trigger('reset')
  $('#message').text('Error Changing Passwords, Try Again')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('Change password failed', error)
}

const onSignOutSuccess = (data) => {
  $('#message').text('Signed Out Successfully!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('Sign out success')
}

const onSignOutFailure = (error) => {
  $('#message').text('Error Signing Out')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
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
