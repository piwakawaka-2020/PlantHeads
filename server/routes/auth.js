const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const router = express.Router()


applyAuthRoutes(router, {

})
  
  module.exports = router