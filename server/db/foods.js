const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function getFood (id, db = connection) {
  return db('foods')
    .where('id', id)
    .first()
}

module.exports = {
  getFoods,
  getFood
}
