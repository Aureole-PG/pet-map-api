const Server = require('./api/models/server')
require('dotenv').config()

const server = new Server()

server.execute()