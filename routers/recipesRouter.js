const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json("Hello from the recipes man thing")
})

module.exports = router