const db = require('../db-config')

module.exports = {
    getRecipesContainingIngredient,
}

function getRecipesContainingIngredient(ingredient_id) {
   return db('steps as s')
        .join('recipes as r', 'r.id', 's.recipe_id')
        .join('ingredients as i', 'i.id', 's.ingredient_id')
        .select('i.name as Ingredient', 'r.name as Recipe')
        .where({ ingredient_id: ingredient_id })
}