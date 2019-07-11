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
      } else {
        return db
      }
    })
    .then(() => {
      if (food.water_usage) {
        return db('water_usages')
          .where('food_id', food.id)
          .update({
            value: food.water_usage
          })
      } else {
        return db
      }
    })
    .then(() => db)
    .then(getFoods)
}

module.exports = {
  getFoods,
  editFood
}
