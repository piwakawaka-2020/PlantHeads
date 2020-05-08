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
        common_name: req.body.common_name
    }
    dbFunction.addListing(plant)
        .then((id) => {
            dbFunction.getListingById(id[0])
                .then((listing) => {
                    res.status(201).send(listing)
                })
                .catch ((error) => {
                    res.status(500).send(error.message)
                })
        })
})

//DELETE Routes for deleting a plant on the list
router.delete('/:id', (req,res) => {
    let id = req.params.id
    dbFunction.deleteListing(id)
        .then(() => {
            res.status(200).json({deleted:id})
        })
})

//PUT Routes to update a listing
router.put('/:id', (req,res) => {
    dbFunction.updateListing(req.params.id, req.body)
        .then((listing) => {
            res.status(201).send(listing)
        })
        .catch ((error) => {
            res.status(500).send(error.message)
        })
})

//routes to get a listing for an individual plant
router.get('/plants/:plantsId', (req,res) => {
    let id = req.params.plantsId
    dbFunction.getAllByPlantId(id)
        .then((plants) => {
            res.json(plants)
        })
        .catch((error) => {
            res.status(500).send(error.message)
        })
})

//routes for listing details returns listing object
router.get('/:listingId', (req,res) => {
    let id = req.params.listingId
    dbFunction.getSingleListing(id)
    .then((listing) => {
        res.json(listing)
    })
    .catch((error) => {
        res.status(500).send(error.message)
    })
})


module.exports = router