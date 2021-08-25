const express = require('express')
const gpsController = require('../controllers/gpsController')
const petInfo = require('../controllers/auxiliarInf')
const router = express.Router()


module.exports = function(io) {
    router.post('/gps',(req, res)=> gpsController.createGpsPoint(req, res, io))
    router.get('/petInfo', petInfo.PetInfo)
    router.get('/:gps_id',  gpsController.buscarGps)
    return router
}