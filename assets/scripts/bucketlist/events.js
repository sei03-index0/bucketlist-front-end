const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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
  api.deleteList(listItemId)
    .then(() => {
      ui.onDeleteSuccess()
      onIndexListItems()
    })
    .catch(ui.onDeleteFailure())
}

const onUpdateListItem = (event) => {
  event.preventDefault()
  store.listId = $(event.target).data('id')
  store.currModalId = `list-item-${store.listId}`
  const form = event.target
  const formData = getFormFields(form)
  api.updateList(formData)
    .then(() => {
      ui.updateListSuccess()
      onIndexListItems()
    })
    .catch(ui.updateListFailure)
}

const onIndexListItems = () => {
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
  $('body').on('click', '#delete-list-item', onDeleteListItem)
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
