const express = require('express')

const gpsController = require('../controllers/gpsController')

const router = express.Router()

router.get('/get/:gps_id/:latitud/:longitud', gpsController.createGpsPoint)
router.get('/:gps_id',  gpsController.buscarGps)
module.exports = router