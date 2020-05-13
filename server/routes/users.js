const express = require('express')
const router = express.Router()

const { getUser } = require('../db/users')

//GET Routes for user
router.get('/:id', (req,res) => {
    return getUser(id)
            .then((user) => {
                res.json(user)
            })
})

module.exports = router