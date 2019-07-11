const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function getFood (id, db = connection) {
  return db('foods')
    .join('water_usages', 'foods.id', 'water_usages.food_id')
    .join('carbon_outputs', 'foods.id', 'carbon_outputs.food_id')
    .join('categories', 'foods.category_id', 'categories.id')
    .where('foods.id', id)
    .first()
    .select(
      'foods.id',
      'foods.name',
      'categories.name as category',
      'carbon_outputs.value as carbon_output',
      'water_usages.value as water_usage'
    )
}

function deleteFood (id, db = connection) {
  return db('foods')
    .where('id', id)
    .del()
}

module.exports = {
  getFoods,
  getFood,
  deleteFood
}
