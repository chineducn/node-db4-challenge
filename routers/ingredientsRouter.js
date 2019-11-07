const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json('ingredients are here to stay')
})

module.exports = router