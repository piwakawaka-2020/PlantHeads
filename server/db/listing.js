const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//functions getAllListing
function getAllListing(db = connection) {
    return db('listing')
        .select()
}

module.exports = {
    getAllListing
}