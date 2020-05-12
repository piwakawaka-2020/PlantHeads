const express = require('express')
const router = express.Router()
const dbFunction = require('../db/savedPlants')

router.get('/:userId', (req, res) => {
    dbFunction.getAllSaved(req.params.userId)
    .then((saved) => {
        res.json(saved)
    })
})

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
    dbFunction.deleteSavedPlant(req.params.id)
    .then(() => {
        res.status(200).json({delete: req.params.id})
    })
})

module.exports = router