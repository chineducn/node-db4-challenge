const express = require('express')
const ingredients = require('../data/helpers')

const router = express.Router()

router.get('/:id/recipes', (req, res) => {
    ingredients.getRecipesContainingIngredient(req.params.id)
        .then(list => {
            res
                .status(200)
                .json(list)
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: `There was an error getting the list of recipes for the ingredient, ${error}`
                })
        })
})

module.exports = router