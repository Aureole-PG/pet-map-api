const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/lib/mongoose')
const app = express()
const io = require('socket.io')
const server = require('http').createServer(app)
const { config } = require('./config')
const {socket} = require('./api/models/socket')
conectarDB(config.dbMongo)

// Middleware
app.use(cors())
app.use(express.json())
app.use('/api', require('./api/routes/gps.routes'))
socket(io(server))
// Server
server.listen(config.port, function () {
    // eslint-disable-next-line no-console
    console.log(`Listening on port: ${config.port}`)
  })