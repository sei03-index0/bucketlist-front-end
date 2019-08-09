const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  const listItemId = $(event.target).closest('section').data('id')
  api.deleteListItem(listItemId)
    .then(() => onIndexListItems(event))
    .catch(ui.onDestroyFailure)
}

const onUpdateListItem = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  const formData = getFormFields(event.target)
  api.updateListItem(formData, id)
  api.indexListItems()
    .then(ui.onUpdateSuccess)
}

const onIndexListItems = (event) => {
  event.preventDefault()
  api.indexLists()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateListItem = (event) => {
  console.log('got here')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createList(formData)
    .then(ui.onCreateSuccess)
    .then(() => onIndexListItems(event))
    .catch(ui.onCreateFailure)
}

const addHandlers = () => {
  $('.content').on('click', '.delete-list-item', onDeleteListItem)
  $('.content').on('submit', '.update-list-item', onUpdateListItem)
  $('.content').on('submit', '.create-list-item', onCreateListItem)
}

module.exports = {
  onAddListItem,
  onDeleteListItem,
  onUpdateListItem,
  onCreateListItem,
  onIndexListItems,
  addHandlers
}
