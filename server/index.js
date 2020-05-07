
const port = process.env.PORT || 3000

require('dotenv').config()

const server = require('./server')

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
