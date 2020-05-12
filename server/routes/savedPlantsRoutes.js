const express = require('express')
const router = express.Router()
const dbFunction = require('../db/savedPlants')
const { decode } = require('../auth/token')
const verifyJwt = require('express-jwt')


router.get('/', (req, res) => {
    dbFunction.getAllSaved()
    .then((saved) => {
        res.json(saved)
    })
})

router.post('/', decode, (req, res) => {
    dbFunction.addSavedPlant(req.body)
    .then(id => {
        console.log(res.body, 'saved as', id)
        res.status(201).json({id: id})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: 'Something went wrong'})
    })
})

router.delete('/:id', decode, (req, res) => {
    dbFunction.deleteSavedPlant(req.params.id)
    .then(() => {
        res.status(200).json({delete: req.params.id})
    })
})

module.exports = router