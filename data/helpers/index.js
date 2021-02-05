const recipes = require('./recipesHelpers')
const ingredients = require('./ingredientsHelpers')

module.exports = {
    getRecipes: recipes.getRecipes,
    getShoppingList: recipes.getShoppingList,
    getInstructions: recipes.getInstructions,
    getRecipesContainingIngredient: ingredients.getRecipesContainingIngredient,
}