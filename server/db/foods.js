const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function addFood (food, db = connection) {
  return db('foods')
    .insert(food)
}

module.exports = {
  getFoods,
  addFood
}
