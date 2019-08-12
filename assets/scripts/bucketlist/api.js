'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexLists = () => {
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = (data) => {
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      listItem: {
        title: data.listItem.title,
        description: data.listItem.description,
        completed: false
      }
    }
  })
}

const deleteList = (listId) => {
  return $.ajax({
    url: config.apiUrl + '/list-items/' + listId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = (data) => {
  return $.ajax({
    url: config.apiUrl + '/list-items/' + store.listId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      listItem: {
        title: data.listItem.title,
        description: data.listItem.description
      }
    }
  })
}

const toggleComplete = (data) => {
  return $.ajax({
    url: config.apiUrl + '/list-items/' + store.listId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      listItem: {
        completed: data
      }
    }
  })
}

module.exports = {
  indexLists,
  createList,
  deleteList,
  updateList,
  toggleComplete
}
