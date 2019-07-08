exports.seed = knex =>
  knex('foods').del()
    .then(() =>
      knex('foods').insert([
        { name: 'Lamb', food_group_id: 5 },
        { name: 'Beef', food_group_id: 5 },
        { name: 'Turkey', food_group_id: 5 },
        { name: 'Broccoli', food_group_id: 2 },
        { name: 'Tuna', food_group_id: 4 },
        { name: 'Salmon', food_group_id: 4 },
        { name: 'Cheese', food_group_id: 6 },
        { name: 'Pork', food_group_id: 5 },
        { name: 'Yogurt', food_group_id: 6 },
        { name: 'Chicken', food_group_id: 5 },
        { name: 'Milk', food_group_id: 6 },
        { name: 'Eggs', food_group_id: 6 },
        { name: 'Rice', food_group_id: 3 },
        { name: 'Potatoes', food_group_id: 2 },
        { name: 'Beans', food_group_id: 3 },
        { name: 'Tomatoes', food_group_id: 1 },
        { name: 'Tofu', food_group_id: 2 },
        { name: 'Lentils', food_group_id: 3 },
        { name: 'Peanut butter', food_group_id: 3 },
        { name: 'Nuts', food_group_id: 3 },
        { name: 'Oranges', food_group_id: 1 },
        { name: 'Apples', food_group_id: 1 },
        { name: 'Corn', food_group_id: 2 },
        { name: 'Lettuce', food_group_id: 2 },
        { name: 'Strawberries', food_group_id: 1 },
        { name: 'Avocados', food_group_id: 1 },
        { name: 'Oranges', food_group_id: 1 },
        { name: 'Plum', food_group_id: 1 }
      ]))
