const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json('we are in server LAND!!!!!!!')
})

module.exports = server