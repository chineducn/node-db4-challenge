
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Coffee', quantity: 11.56},
        {name: 'Sage', quantity: 12.45},
        {name: 'Raspberries', quantity: 3.45},
        {name: 'Wine', quantity: 5.87},
        {name: 'Seedlings', quantity: 45.00},
        {name: 'Salt', quantity: 6.89},
        {name: 'Goat', quantity: 4.45},
        {name: 'Turnip', quantity: 34.00},
        {name: 'Cheese', quantity: 9.00},
        {name: 'Pears', quantity: 10.89},
        {name: 'Cranberries', quantity: 5.87},
        {name: 'Tomato', quantity: 45.00},
        {name: 'Oil', quantity: 6.89},
        {name: 'Beer', quantity: 4.45},
        {name: 'Pepper', quantity: 34.00},
        {name: 'Thyme', quantity: 9.00},
        {name: 'Cilantro', quantity: 10.89},
        {name: 'Ecolab', quantity: 45.00},
      ]);
    });
};
