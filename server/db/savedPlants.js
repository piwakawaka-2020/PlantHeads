const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//functions getAllSaved
function getAllSaved(db = connection) {
    return db('saved_plant')
    .select()
}


//functions to add plant to users favourites database
function addSavedPlant(saved_plant, db = connection) {
    return db('saved_plant')
    .insert({
        users_id: saved_plant.users_id,
        scientific_name: saved_plant.scientific_name,
        plants_id: saved_plant.plants_id,
        photoURL: saved_plant.photoURL,
        notes: saved_plant.notes,
    })
    .then(ids => {
        return ids[0]
    })
}

function getSavedById(id, db = connection) {
    return db('saved_plant')
    .where('id', id)
    .then((saved_plant) => {
        return saved_plant[0]
    })
}

//Function to remove favourited plant from users favourites database
function deleteSavedPlant(id, db = connection) {
    return db('saved_plant')
    .where('id', id)
    .delete()
}

module.exports = {
    getAllSaved,
    addSavedPlant,
    getSavedById,
    deleteSavedPlant
}