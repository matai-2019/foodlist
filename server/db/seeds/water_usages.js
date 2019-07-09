exports.seed = (knex) =>
  knex('water_usages').del()
    .then(() =>
      knex('water_usages').insert([
        { id: 1, food_id: 2, value: 15000 },
        { id: 2, food_id: 7, value: 5000 },
        { id: 3, food_id: 8, value: 4800 },
        { id: 4, food_id: 10, value: 3900 },
        { id: 5, food_id: 11, value: 1020 },
        { id: 6, food_id: 13, value: 3400 },
        { id: 7, food_id: 16, value: 180 },
        { id: 8, food_id: 20, value: 3100 },
        { id: 9, food_id: 14, value: 250 },
        { id: 10, food_id: 12, value: 3265 },
        { id: 11, food_id: 1, value: 8763 },
        { id: 12, food_id: 18, value: 4055 },
        { id: 13, food_id: 4, value: 322 },
        { id: 14, food_id: 17, value: 925 },
        { id: 15, food_id: 6, value: 1400 },
        { id: 16, food_id: 9, value: 2000 },
        { id: 17, food_id: 19, value: 625 },
        { id: 18, food_id: 3, value: 5291 },
        { id: 19, food_id: 25, value: 276 },
        { id: 20, food_id: 22, value: 420 },
        { id: 21, food_id: 23, value: 900 },
        { id: 22, food_id: 24, value: 237 },
        { id: 23, food_id: 26, value: 1284 },
        { id: 24, food_id: 27, value: null },
        { id: 25, food_id: 28, value: 1612 },
        { id: 26, food_id: 5, value: null },
        { id: 27, food_id: 15, value: null },
        { id: 28, food_id: 21, value: 220 }
      ]))
