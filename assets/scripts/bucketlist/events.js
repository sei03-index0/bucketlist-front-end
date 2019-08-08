const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  const form = event.target//
  event.preventDefault()
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onAddListItem = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addListItem(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onDeleteListItem = (event) => {
  event.preventDefault()
  const ListItemId = $(event.target).closest('section').data('id')
  api.deleteListItem(ListItemId)
    .then(() => onGetListItems(event))
    .catch(ui.onDestroyFailure)
}

const onUpdateListItem = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  api.updateListItem(formData, id)
  api.getListItems()
    .then(ui.onUpdateSuccess)
}

const addHandlers = () => {
  $('#getListItemsButton').on('click', onGetListItems)
  $('.content').on('click', '.delete-list-item', onDeleteListItem)
  $('.content').on('submit', '.update-list-item', onUpdateListItem)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddListItem,
  onDeleteListItem,
  onUpdateListItem,
  onGetListItems,
  addHandlers,
}
