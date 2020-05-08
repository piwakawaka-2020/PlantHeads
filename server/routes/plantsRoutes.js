const request = require ('superagent')

const express = require('express')

const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

const router = express.Router()

const baseUrl = 'https://trefle.io/api'
const token = process.env.TREFLE_TOKEN
const plants = '/plants'

//routes to getAllPlants
router.get('/', (req,res) => {
    return request
        .get(baseUrl + plants)
        .query('token=' + token)
        .then((plants) => {
            res.json(plants.body)
        })
})
   


module.exports = router