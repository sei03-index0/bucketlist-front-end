'use strict'

// Auth Success and Failure Messages
const onSignUpSuccess = (data) => {
  $('#message').text('Successfully Signed Up!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onSignUpFailure = (error) => {
  $('#message').text('Error Signing Up, Try Again')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.log('onIndexFailure ran. Error is :', error)
}

const onSignInSuccess = (data) => {
  $('#message').text('Successfully Signed In!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onSignInFailure = (error) => {
  $('#message').text('Sign In NOT Successful')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onChangePasswordSuccess = (data) => {
  $('#message').text('Changed Password Successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onChangePasswordFailure = (error) => {
  $('#message').text('Error Changing Passwords, Try Again')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onSignOutSuccess = (data) => {
  $('#message').text('Signed Out Successfully!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.lists)
}

const onSignOutFailure = (error) => {
  $('#message').text('Error Signing Out')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
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
