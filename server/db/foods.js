const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
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
    .then((id) => {
      return db('water_usages')
        .insert({ food_id: foodID, value: food.water_usage })
    })
    .catch(err => err)
}

module.exports = {
  getFoods,
  addFood
}
