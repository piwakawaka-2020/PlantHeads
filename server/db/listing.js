const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


//functions to getAllListing
function getAllListing(db = connection) {
    return db('listing')
        .select()
}

//functions to add a Listing
function addListing(listing, db = connection) {
    return db('listing')
        .insert({
            plants_id: listing.plantsId,
            users_id: listing.usersId,
            scientific_name: listing.scientificName,
            common_name:listing.commonName,
            cost: listing.cost,
            type: listing.type,
            care_tips: listing.careTips,
            photoFile: listing.photoFile
        })
}

function getListingById(id, db = connection) {
    return db('listing')
        .where('id', id)
        .then((listing) => {
            return listing[0]
        })
}

//functions for single listing details
function getSingleListing(id, db = connection) {
    return db('listing')
        .where('id', id)
        .select()
        .first()
}

//functions to delete a listing
function deleteListing(id, db = connection) {
    return db('listing')
        .where('id', id)
        .delete()
}

//functions to update a listing by Id
function updateListing(id, listing, db = connection) {
    return db('listing')
        .where('id', id)
        .update(listing)
}

//functions to get the listing of an indiv plant
function getAllByPlantId (id, db = connection) {
    return db('listing')
        .where('plants_id', id)
        .select()
}

module.exports = {
    getAllListing,
    addListing,
    getListingById,
    deleteListing,
    updateListing,
    getAllByPlantId,
    getSingleListing
}