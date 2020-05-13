const express = require('express')
const router = express.Router()
const { decode } = require('../auth/token')

const dbFunction = require('../db/listing')


//GET Routes for getAllListing
router.get('/', (req,res) => {
    dbFunction.getAllListing()
        .then((listing) => {
            res.json(listing)
        })
})

//POST Routes for adding a plant to list
router.post('/', decode, (req,res) => {
    let plant  = {
        plantsId: req.body.plantsId,
        usersId: req.body.usersId,
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        cost: req.body.cost,
        type: req.body.type,
        careTips: req.body.careTips,
        photoFile: req.body.photoFile  
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
router.delete('/:id', decode, (req,res) => {
    let id = req.params.id
    dbFunction.deleteListing(id)
        .then(() => {
            res.status(200).json({deleted:id})
        })
})

//PUT Routes to update a listing
router.put('/:id', decode, (req,res) => {
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