exports.seed = knex =>
  knex('carbon_outputs').del()
    .then(() =>
      knex('carbon_outputs').insert([
        { id: 1, food_id: 1, value: 20.85 },
        { id: 2, food_id: 2, value: 13.78 },
        { id: 3, food_id: 3, value: 5.83 },
        { id: 4, food_id: 4, value: 5.71 },
        { id: 5, food_id: 5, value: 5.26 },
        { id: 6, food_id: 6, value: 5.15 },
        { id: 7, food_id: 7, value: 4.47 },
        { id: 8, food_id: 8, value: 4.45 },
        { id: 9, food_id: 9, value: 3.49 },
        { id: 10, food_id: 10, value: 3.37 },
        { id: 11, food_id: 11, value: 3.17 },
        { id: 12, food_id: 12, value: 3.06 },
        { id: 13, food_id: 13, value: 2.08 },
        { id: 14, food_id: 14, value: 1.46 },
        { id: 15, food_id: 15, value: 1.40 },
        { id: 16, food_id: 16, value: 1.39 },
        { id: 17, food_id: 17, value: 1.38 },
        { id: 18, food_id: 18, value: 0.78 },
        { id: 19, food_id: 19, value: 0.42 },
        { id: 20, food_id: 20, value: 0.39 },
        { id: 21, food_id: 21, value: 1.70 },
        { id: 22, food_id: 22, value: 1.20 },
        { id: 23, food_id: 25, value: 7.20 },
        { id: 24, food_id: 23, value: 2.70 },
        { id: 25, food_id: 24, value: 4.72 },
        { id: 26, food_id: 26, value: 2.53 },
        { id: 27, food_id: 27, value: 1.55 }
      ]))
