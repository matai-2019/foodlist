exports.seed = knex =>
  knex('foods').del()
    .then(() =>
      knex('foods').insert([
        { id: 1, name: 'Lamb', food_group_id: 5 },
        { id: 2, name: 'Beef', food_group_id: 5 },
        { id: 3, name: 'Turkey', food_group_id: 5 },
        { id: 4, name: 'Broccoli', food_group_id: 2 },
        { id: 5, name: 'Tuna', food_group_id: 4 },
        { id: 6, name: 'Salmon', food_group_id: 4 },
        { id: 7, name: 'Cheese', food_group_id: 6 },
        { id: 8, name: 'Pork', food_group_id: 5 },
        { id: 9, name: 'Greek Yogurt', food_group_id: 6 },
        { id: 10, name: 'Chicken', food_group_id: 5 },
        { id: 11, name: 'Milk', food_group_id: 6 },
        { id: 12, name: 'Eggs', food_group_id: 6 },
        { id: 13, name: 'Rice', food_group_id: 3 },
        { id: 14, name: 'Potatoes', food_group_id: 2 },
        { id: 15, name: 'Beans', food_group_id: 3 },
        { id: 16, name: 'Tomatoes', food_group_id: 1 },
        { id: 17, name: 'Tofu', food_group_id: 2 },
        { id: 18, name: 'Lentils', food_group_id: 3 },
        { id: 19, name: 'Peanut Butter', food_group_id: 3 },
        { id: 20, name: 'Nuts', food_group_id: 3 },
        { id: 21, name: 'Oranges', food_group_id: 1 },
        { id: 22, name: 'Apples', food_group_id: 1 },
        { id: 23, name: 'Corn', food_group_id: 2 },
        { id: 24, name: 'Lettuce', food_group_id: 2 },
        { id: 25, name: 'Strawberries', food_group_id: 1 },
        { id: 26, name: 'Avocados', food_group_id: 1 },
        { id: 27, name: 'Plum', food_group_id: 1 }
      ]))
