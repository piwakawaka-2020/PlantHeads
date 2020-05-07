const express = require('express')
const router = express.Router()

const dbFunction = require('../db/listing')


//GET Routes for getAllListing
router.get('/', (req,res) => {
    dbFunction.getAllListing()
        .then((listing) => {
            res.json(listing)
        })
})

//POST Routes for adding a plant to list
router.post('/', (req,res) => {
    let plant  = {
        usersId: req.body.usersId,
        plantsId: req.body.plantsId,
        scientificName: req.body.scientificName,
        cost: req.body.cost,
        notes: req.body.notes
    }
    dbFunction.addListing(plant)
        .then((id) => {
            dbFunction.getListingById(id[0])
                .then((listing) => {
                    res.json(listing)
                })
        })
})

//DELETE Routes for deleting a plant on the list
router.delete('/:id', (req,res) => {
    let id = req.params.id
    dbFunction.deleteListing(id)
        .then(() => {
            res.json({deleted:id})
        })
})

//PUT Routes to update a listing
router.put('/:id', (req,res) => {
    dbFunction.updateListing(req.params.id, req.body)
        .then((listing) => {
            res.json(listing)
        })
})

module.exports = router