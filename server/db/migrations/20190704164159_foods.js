exports.up = (knex) =>
  knex.schema.createTable('foods', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('food_group_id').references('food_groups.id')
  })

exports.down = (knex) => knex.schema.dropTable('foods')
