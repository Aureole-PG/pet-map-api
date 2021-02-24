const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/lib/mongoose')
const app = express()

const server = require('http').createServer(app)
const { config } = require('./config')
conectarDB(config.dbMongo)

// Middleware
app.use(cors())
app.use(express.json())
app.use('/api/gps', require('./api/routes/gps.routes'))
// Server
server.listen(config.port, function () {
    // eslint-disable-next-line no-console
    console.log(`Listening on port: ${config.port}`)
  })