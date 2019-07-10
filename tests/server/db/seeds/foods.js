exports.seed = (knex) =>
  knex('foods').del()
    .then(() => knex('categories').del())
    .then(() =>
      knex('categories').insert([
        { id: 1, name: 'Fruits' },
        { id: 2, name: 'Vegetables' },
        { id: 3, name: 'Grains, beans, and legumes' },
        { id: 4, name: 'Fish' },
        { id: 5, name: 'Meat' },
        { id: 6, name: 'Animal byproducts' }
      ]))
    .then(() =>
      knex('foods').insert([
        { id: 1, name: 'Lamb', category_id: 5 },
        { id: 2, name: 'Beef', category_id: 5 },
        { id: 3, name: 'Turkey', category_id: 5 },
        { id: 4, name: 'Broccoli', category_id: 2 },
        { id: 5, name: 'Tuna', category_id: 4 },
        { id: 6, name: 'Salmon', category_id: 4 },
        { id: 7, name: 'Cheese', category_id: 6 },
        { id: 8, name: 'Pork', category_id: 5 },
        { id: 9, name: 'Greek Yogurt', category_id: 6 },
        { id: 10, name: 'Chicken', category_id: 5 },
        { id: 11, name: 'Milk', category_id: 6 },
        { id: 12, name: 'Eggs', category_id: 6 },
        { id: 13, name: 'Rice', category_id: 3 },
        { id: 14, name: 'Potatoes', category_id: 2 },
        { id: 15, name: 'Beans', category_id: 3 },
        { id: 16, name: 'Tomatoes', category_id: 1 },
        { id: 17, name: 'Tofu', category_id: 3 },
        { id: 18, name: 'Lentils', category_id: 3 },
        { id: 19, name: 'Peanut Butter', category_id: 3 },
        { id: 20, name: 'Nuts', category_id: 3 },
        { id: 21, name: 'Oranges', category_id: 1 },
        { id: 22, name: 'Apples', category_id: 1 },
        { id: 23, name: 'Corn', category_id: 2 },
        { id: 24, name: 'Lettuce', category_id: 2 },
        { id: 25, name: 'Strawberries', category_id: 1 },
        { id: 26, name: 'Avocados', category_id: 1 },
        { id: 27, name: 'Plums', category_id: 1 }
      ]))
