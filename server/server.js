const express = require('express')

const allPlants = require('./routes/plantsRoutes')
const allListing = require('./routes/listingRoutes')
const allSaved = require('./routes/savedPlantsRoutes') 

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/plants', allPlants)
server.use('/api/listings', allListing)
server.use('/api/savedPlants', allSaved)

module.exports = server
