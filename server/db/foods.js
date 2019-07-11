const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function editFood (food, db = connection) {
  return db('foods')
    .where('id', food.id)
    .update({
      name: food.name,
      category_id: food.category_id
    })
    .then(() => {
      return db('carbon_outputs')
        .where('food_id', food.id)
        .update({
          value: food.carbon_output
        })
    })
    .then(() => {
      return db('water_usages')
        .where('food_id', food.id)
        .update({
          value: food.water_usage
        })
    })
    .then(() => db)
    .then(getFoods)
}

module.exports = {
  getFoods,
  editFood
}
