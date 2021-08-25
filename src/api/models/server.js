const express = require('express')
const cors = require('cors')
const http = require('http')
const conectarDB = require('../../config/lib/mongoose')
const { config } = require('../../config')
const router = require('../routes/gps.routes')
const socketio = require('socket.io')
const Sockets = require("../models/socket")
class Server{
    constructor(){
        this.app= express()
        this.port = config.port
        this.server = http.createServer(this.app)
        this.io = socketio(this.server)
    }

    middelwares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use("/api", router(this.io))
        conectarDB(config.dbMongo)
        
    }
    socketsConfig(){
        new Sockets(this.io)
    }
    execute(){
        this.middelwares()
        this.socketsConfig()
        this.server.listen(this.port,()=>console.log("server up on " + this.port))
    }
    

}

module.exports = Server