const express = require('express')
const recipes = require('../data/helpers')

const router = express.Router()

router.get('/', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            if (recipes.length) {
                res.status(200).json(recipes)
            }
            else {
                res
                    .status(404)
                    .json({
                        message: "There are no saved recipes"
                    })
            }
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: "There was an error getting the recipes list " + " " + error
                })
        })
})

router.get('/:id/shoppingList', (req, res) => {
    recipes
        .getShoppingList(req.params.id)
        .then(list => {
            res
                .status(200)
                .json(list)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the shopping list, ${error}`
                })
        })
})

router.get('/:id/instructions', (req, res) => {
    recipes
        .getInstructions(req.params.id)
        .then(instructions => {
            res
                .status(200)
                .json(instructions)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the instructions, ${error}`
                })
        })
})

module.exports = router