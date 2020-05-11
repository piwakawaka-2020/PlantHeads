const jwt = require('jsonwebtoken')
const {getUserByUsername} = require('../db/users')
const {comparePasswordToHash} = require('./hash')

module.exports = {
  issue,
  decode
}
function issue (req, res) {
  getUserByUsername(req.body.username)
    .then(user => {
      if (!user) {
        res.status(403).json({message: 'User does not exist'})
      } else {
        comparePasswordToHash(req.body.password, user.hash)
        .then((match) => {
          if (!match) {
            res.status(400).json({message: 'Password is incorrect'})
          } else {
            const token = createToken(user, process.env.JWT_SECRET)
            res.json({
              message: 'Authentication successful',
              token
            })
          }
        })
        .catch(err => {
          res.status(500).json({message: err.message})
        })
      }
    })
}

function createToken (user, secret) {
  const payload = {
    firstName: user.first_name,
    username: user.username,
    email: user.email,
  }

  const options = {
    expiresIn: '24h'
  }

  return jwt.sign(payload, secret, options)
}

function decode (req, res, next) {
  verifyJwt({ secret: process.env.JWT_SECRET, credentialsRequired: true })(req, res, next)
}

