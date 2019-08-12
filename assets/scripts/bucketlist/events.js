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
    .catch(ui.onDeleteFailure)
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

const onFilterComplete = () => {
  api.indexLists()
    .then(ui.filterCompleteSuccess)
    .catch(ui.onIndexFailure)
}

const onFilterIncomplete = () => {
  api.indexLists()
    .then(ui.filterIncompleteSuccess)
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

const onToggleComplete = event => {
  store.listId = $(event.target).data('id')
  const isItChecked = $(event.target).is(':checked')
  api.toggleComplete(isItChecked)
    .then(onIndexListItems)
    .catch(ui.toggleCompleteFailure)
}

const addHandlers = () => {
  $('body').on('click', '#delete-list-item', onDeleteListItem)
  $('.content').on('submit', '.update-list-item', onUpdateListItem)
  $('.content').on('click', '.discard-changes', ui.resetForms)
  $('body').on('click', '.modal-launch', ui.resetForms)
  $('body').on('click', '.close', ui.resetForms)
  $('.list-header').on('submit', '.create-list-item', onCreateListItem)
  $('.content').on('click', '.complete-item', onToggleComplete)
  $('.content').on('click', '#filterAll', onIndexListItems)
  $('.content').on('click', '#filterComplete', onFilterComplete)
  $('.content').on('click', '#filterIncomplete', onFilterIncomplete)
//  $('.body').on('click', '.sign-in', function () {
// //    $(this).closest('.body').toggleClass('translucent')
//   })
//   $('.body').on('click', '.sign-out', function () {
//     $(this).closest('.body').toggleClass('not')
//   })
}

module.exports = {
  onAddListItem,
  onDeleteListItem,
  onUpdateListItem,
  onCreateListItem,
  onIndexListItems,
  addHandlers,
  onFilterComplete
}
