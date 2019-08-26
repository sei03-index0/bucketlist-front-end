'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexMemories = () => {
  return $.ajax({
    url: config.apiUrl + '/memories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMemory = (data) => {
  return $.ajax({
    url: config.apiUrl + '/memories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      memory: {
        title: data.memory.title,
        description: data.memory.description,
        date: data.memory.date
      }
    }
  })
}

const deleteMemory = (memoryId) => {
  return $.ajax({
    url: config.apiUrl + '/memories/' + memoryId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMemory = (data) => {
  return $.ajax({
    url: config.apiUrl + '/memories/' + store.memoryId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      memory: {
        title: data.memory.title,
        description: data.memory.description,
        date: data.memory.date
      }
    }
  })
}

module.exports = {
  indexMemories,
  createMemory,
  deleteMemory,
  updateMemory
}
