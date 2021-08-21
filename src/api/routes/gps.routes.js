const express = require('express')
const gpsController = require('../controllers/gpsController')
const petInfo = require('../controllers/auxiliarInf')
const router = express.Router()

router.post('/gps', gpsController.createGpsPoint)
router.get('/petInfo', petInfo.PetInfo)
router.get('/:gps_id',  gpsController.buscarGps)
module.exports = router