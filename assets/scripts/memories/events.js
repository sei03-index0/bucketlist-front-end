const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onIndexMemories = () => {
  api.indexMemories()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateMemory = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createMemory(formData)
    .then(ui.onCreateSuccess)
    .then(() => onIndexMemories())
    .catch(ui.onCreateFailure)
}

const onUpdateMemory = (event) => {
  event.preventDefault()
  store.memoryId = $(event.target).data('id')
  store.currModalId = `memory-item-${store.memoryId}`
  const form = event.target
  const formData = getFormFields(form)
  api.updateMemory(formData)
    .then(() => {
      ui.updateSuccess()
      onIndexMemories()
    })
    .catch(ui.updateFailure)
}

const onDeleteMemory = (event) => {
  event.preventDefault()
  const memoryId = $(event.target).closest('section').data('id')
  api.deleteMemory(memoryId)
    .then(() => {
      ui.onDeleteSuccess()
      onIndexMemories()
    })
    .catch(ui.onDeleteFailure)
}

const addHandlers = () => {
  $('body').on('click', '#get-memories', onIndexMemories)
  $('body').on('submit', '.create-memory', onCreateMemory)
  $('body').on('click', '#delete-memory', onDeleteMemory)
  $('body').on('submit', '.update-memory', onUpdateMemory)
}

module.exports = {
  addHandlers
}
