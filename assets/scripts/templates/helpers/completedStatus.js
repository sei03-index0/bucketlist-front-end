'use strict'

const completedStatus = (currListItem) => {
  const isItComplete = currListItem.completed
  if (isItComplete) {
    return 'checked'
  }
}

module.exports = completedStatus
