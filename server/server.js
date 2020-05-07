const express = require('express')

const allPlants = require('./routes/plantsRoutes')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/plants', allPlants)

module.exports = server
