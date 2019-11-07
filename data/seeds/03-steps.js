
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, description: 'Add ingredient', ingredient_id: 1, recipe_id: 1},
        {step_number: 2, description: 'Pour ingedient', ingredient_id: 2, recipe_id: 1},
        {step_number: 3, description: 'Douse meal', ingredient_id: 3, recipe_id: 1},
        {step_number: 1, description: 'Before buring add this', ingredient_id: 4, recipe_id: 2},
        {step_number: 2, description: 'Sprinkle a bit of', ingredient_id: 5, recipe_id: 2},
        {step_number: 3, description: 'Mash it', ingredient_id: 6, recipe_id: 2},
        {step_number: 1, description: 'Pound to a pulp', ingredient_id: 7, recipe_id: 3},
        {step_number: 2, description: 'Burn to a crisp then add', ingredient_id: 8, recipe_id: 3},
        {step_number: 3, description: 'Debone before adding to mix', ingredient_id: 9, recipe_id: 3},
        {step_number: 1, description: 'Mix and mash', ingredient_id: 10, recipe_id: 4},
        {step_number: 2, description: 'Add more of this', ingredient_id: 11, recipe_id: 4},
        {step_number: 3, description: 'Add even more of this', ingredient_id: 12, recipe_id: 4},
        {step_number: 1, description: 'Is this on the list, add it', ingredient_id: 13, recipe_id: 5},
        {step_number: 2, description: 'Swirl then dab', ingredient_id: 14, recipe_id: 5},
        {step_number: 3, description: 'Dabbing is a no no', ingredient_id: 15, recipe_id: 5}
      ]);
    });
};
