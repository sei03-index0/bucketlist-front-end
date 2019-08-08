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
  onAddListItem,
  onDeleteListItem,
  onUpdateListItem,
  onGetListItems,
  addHandlers
}
