exports.up = knex =>
  knex.schema.createTable('water_usages', (table) => {
    table.increments('id').primary()
    table.integer('food_id').references('foods.id')
    table.integer('value')
  })

exports.down = knex => knex.schema.dropTable('water_usages')
