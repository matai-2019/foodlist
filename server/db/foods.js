const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function editFood (food, db = connection) {
  return db('foods')
    .where('id', food.id)
    .update({
      id: food.id,
      name: food.name,
      category_id: food.category_id
    })
    .then(() => {
      if (food.carbon_output) {
        return db('carbon_outputs')
          .where('food_id', food.id)
          .update({
            value: food.carbon_output
          })
      }
    })
    .then(() => {
      if (food.water_usage) {
        return db('water_usages')
          .where('food_id', food.id)
          .update({
            value: food.water_usage
          })
      }
    })
    .then(() => getFood(food.id, db))
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

function addFood (food, db = connection) {
  let foodID
  return db('foods')
    .insert({ name: food.name, category_id: food.category_id })
    .then((id) => {
      foodID = id[0]
      return db('carbon_outputs')
        .insert({ food_id: foodID, value: food.carbon_output })
    })
    .then(() => {
      return db('water_usages')
        .insert({ food_id: foodID, value: food.water_usage })
    })
    .catch(err => err)
}

function deleteFood (id, db = connection) {
  return db('foods')
    .where('id', id)
    .del()
}

module.exports = {
  getFoods,
  editFood,
  getFood,
  addFood,
  deleteFood
}
