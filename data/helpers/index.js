const db = require('../db-config')

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('steps as s')
        .join('ingredients as i', 'i.id', 's.ingredient_id')
        .select('i.name as ingredient', 'i.quantity')
        .where({ recipe_id: recipe_id })
}