const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getFoodsByCategory (categoryName, db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', 'categories.id')
    .join('carbon_outputs', 'foods.id', 'carbon_outputs.food_id')
    .join('water_usages', 'foods.id', 'water_usages.food_id')
    .where('categories.name', categoryName)
    .select(
      'foods.id',
      'foods.name',
      'carbon_outputs.value as carbonOutput',
      'water_usages.value as waterUsage'
    )
}

module.exports = {
  getFoodsByCategory,
  getCategories
}
