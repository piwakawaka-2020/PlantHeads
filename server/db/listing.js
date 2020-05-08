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
            scientific_name: listing.scientificName,
            users_id: listing.usersId,
            cost: listing.cost,
            notes:listing.notes
        })
}

function getListingById(id, db = connection) {
    return db('listing')
        .where('id', id)
        .then((listing) => {
            return listing[0]
        })
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


module.exports = {
    getAllListing,
    addListing,
    getListingById,
    deleteListing,
    updateListing
}