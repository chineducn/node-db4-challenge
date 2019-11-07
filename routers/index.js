const express = require('express')
const recipesRouter = require('./recipesRouter')
const ingredientsRouter = require('./ingredientsRouter')

const router = express.Router()

router.use('/api/recipes', recipesRouter)
router.use('/api/ingredients', ingredientsRouter)

module.exports = router