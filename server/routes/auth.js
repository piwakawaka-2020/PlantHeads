const express = require('express')
const router = express.Router()
const token = require('../auth/token')
const { createUser } = require('../db/users')

router.post('/register', register, token.issue)

function register(req, res, next) {
    const { username, password } = req.body
    createUser({ username, password })
        .then(([id]) => {
            // Be sure to grab the id out of the array Knex returns it in!
            // You can use array destructuring (as above) if you like.
           res.locals.userId = id
           next()
        })
        .catch(({ message }) => {
            // This is vulnerable to changing databases. SQLite happens to use
            // this message, but Postgres doesn't.  
            if (message.includes('UNIQUE constraint failed: users.username')) {
                return res.status(400).json({
                    ok: false,
                    message: 'Username already exists.'
                })
            }
            res.status(500).json({
                ok: false,
                message: "Something bad happened. We don't know why."
            })
        })
}

module.exports = router