const express = require('express')

const server = express()

const authRoute = require('./routes/auth')

server.use(express.json())
server.use(express.static('public'))
server.use(express.json())

server.use('/api/v1/auth', authRoute)

module.exports = server
