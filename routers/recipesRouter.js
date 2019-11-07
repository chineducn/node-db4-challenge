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
    recipes.getShoppingList(req.params.id)
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

module.exports = router