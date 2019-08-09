'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexLists = () => {
  console.log('api index list started')
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = (data) => {
  console.log('in API')
  console.log(data)
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
  console.log('the error is here')
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

module.exports = {
  indexLists,
  createList,
  deleteList,
  updateList
}
