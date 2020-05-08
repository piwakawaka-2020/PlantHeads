const request = require ('superagent')

const express = require('express')

const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

const router = express.Router()

const baseUrl = 'https://trefle.io/api'
const token = process.env.TREFLE_TOKEN
const plants = '/plants'
const filterByComplete = '&complete_data=true'
const q = '&q='

//routes to getAllPlants with complete data, working query for all plants
router.get('/', (req,res) => {
    return request
        .get(baseUrl + plants)
        .query('token=' + token + filterByComplete)
        .then((plants) => {
            res.json(plants.body)
        })
})

//routes for queryPlants, /plants/search/:queryPlant(local)
//needs to be encoded on the API.js to be done URL encode 
//(localhost:3000/api/plants/search/southern%20red) %20=spacing
router.get('/search/:queryPlant', (req,res) => {
    return request
        .get(baseUrl + plants)
        .query('token=' + token + q + req.params.queryPlant)
        .then((plant) => {
            res.json(plant.body)
        })
})

//router forindividual plant that returns a single plant object
//api/plants/:plantId
router.get('/:id', (req,res) => {
    let id = req.params.id
    return request
        .get(baseUrl + plants + '/' + id)
        .query('token=' + token)
        .then((p) => {
            res.json(p.body)
        })
})



//http://trefle.io/api/plants/173194?token=Y1NFNVFIVHB2SzFqM3R0ajFtRHJ2dz09&q

// https://trefle.io/api/plants?token=Y1NFNVFIVHB2SzFqM3R0ajFtRHJ2dz09&complete_data=true

module.exports = router