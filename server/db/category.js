const connection = require('./connection')

function getCategories (db = connection) {
  return db('categories')
}

function getFoodsByCategory (categoryName, db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', 'categories.id')
    .where('categories.name', categoryName)
    .select(
      'foods.id',
      'foods.name'
    )
}

module.exports = {
  getFoodsByCategory,
  getCategories
}
