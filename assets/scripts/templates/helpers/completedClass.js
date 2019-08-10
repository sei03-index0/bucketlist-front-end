'use strict'

const completedClass = (currListItem) => {
  const isItComplete = currListItem.completed
  if (isItComplete) {
    return 'completed'
  }
}

module.exports = completedClass
