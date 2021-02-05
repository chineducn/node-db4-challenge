const express = require('express')
const helmet = require('helmet')

const mainRouter = require('./routers')

const server = express()

server.use(express.json())
server.use(helmet())

server.use('/', mainRouter)

module.exports = server