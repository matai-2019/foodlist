exports.up = (knex) =>
  knex.schema.createTable('carbon_levels', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('color')
  })

exports.down = (knex) => knex.schema.dropTable('carbon_levels')
