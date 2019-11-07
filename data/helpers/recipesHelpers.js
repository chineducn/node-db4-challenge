const db = require('../db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('steps as s')
        .join(
            'ingredients as i',
            'i.id',
            's.ingredient_id'
        )
        .select(
            'i.name as Ingredient',
            'i.quantity'
        )
        .where({ recipe_id: recipe_id })
}

function getInstructions(recipe_id) {
    return db('steps as s')
        .join(
            'recipes as r',
            'r.id',
            's.recipe_id'
        )
        .join(
            'ingredients as i',
            'i.id',
            's.ingredient_id'
        )
        .select(
            'r.name as Recipe',
            's.step_number as Step',
            's.description as Details',
            'i.name as Ingredient'
        )
        .where({ recipe_id: recipe_id })
        .orderBy('s.step_number', 'asc')
}