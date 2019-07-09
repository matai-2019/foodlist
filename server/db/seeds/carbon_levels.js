exports.seed = (knex) =>
  knex('carbon_levels').del()
    .then(() =>
      knex('carbon_levels').insert([
        { id: 1, name: 'Low', color: 'green' },
        { id: 2, name: 'Medium', color: 'yellow' },
        { id: 3, name: 'High', color: 'orange' },
        { id: 4, name: 'Extreme', color: 'red' }
      ])
    )
