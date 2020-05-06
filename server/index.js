const server = require('./server')

const port = process.env.PORT || 3000

const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

server.listen(port, function () {
  console.log('Listening on port', port)
})
