const express = require('express')

const gpsController = require('../controllers/gpsController')

const router = express.Router()

router.post(
  '/',
  gpsController.createGpsPoint
)
router.get('/:gps_id',  gpsController.buscarGps)
module.exports = router