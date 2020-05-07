const express = require('express')
const router = express.Router()
const token = require('../auth/token')
const verifyJwt = require('express-jwt')

const { createUser, getUser } = require('../db/users')

//get and authorise the user's jwt
router.get('/user', verifyJwt({ secret: process.env.JWT_SECRET }), user)

function user(req, res) {
    getUser(req.user.id)
        .then((username) => {
            console.log(username[0])
            res.json({
                ok: true,
                username: username[0].username
            })
        })
        .catch(() =>
            res.status(500).json({
                ok: false,
                message: 'An error ocurred while retrieving your user profile.'
            }))
}

//registers and assigns them a jwt 
router.post('/register', register, token.issue)

function register(req, res, next) {
    const { username, password } = req.body
    createUser({ username, password })
        .then(([id]) => {
            res.locals.userId = id
            next()
        })
        .catch(({ message }) => {
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