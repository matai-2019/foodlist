exports.up = (knex) =>
  knex.schema.createTable('water_levels', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('color')
  })

exports.down = (knex) => knex.schema.dropTable('water_levels')
