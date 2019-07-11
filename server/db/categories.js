const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

module.exports = {
  getCategories
}
