exports.seed = (knex) =>
  knex('water_levels').del()
    .then(() =>
      knex('water_levels').insert([
        { id: 1, name: 'Low', color: 'lightblue' },
        { id: 2, name: 'Medium', color: 'blue' },
        { id: 3, name: 'High', color: 'mediumblue' },
        { id: 4, name: 'Extreme', color: 'midnightblue' }
      ])
    )
