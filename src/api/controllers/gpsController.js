const { validationResult } = require('express-validator')
const Gps = require('../models/gps')
exports.createGpsPoint = async (req, res, io) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
      res.status(400).json({ errores: errs.array() })
      return
    }
  
    try {
      // eslint-disable-next-line no-unused-vars
      const {_id, owner_id, ...rest} = req.body
      const gpsModel = new Gps(rest)
      await gpsModel.save((err, room) => {
        if (err) {
          res.status(400).send({ msg: 'Error al insertar en la base de datos' })
          return
        }
        io.to(owner_id).emit( "new_position", rest );
        res.status(201).json({ msg: 'punto gps ingresado con exito', id: room.id })
      })
    } catch (error) {
      res.status(500).json({ msg: 'hubo un error en el servidor' })
    }
  }

  exports.buscarGps = async (req, res) => {
    try {
    
      const gpsFind = await Gps.findOne({gps_id: req.params.gps_id}).sort({_id: -1})
      if (!gpsFind) {
        res.status(404).json({ msg: 'No se encontraron los datos' })
        return
      }
  
      res.status(200).json({
        msg: 'Busqueda realizada con exito',
        data: gpsFind,
      })
    } catch (error) {
      res.status(500).json({ msg: 'hubo un error en el servidor' })
    }
  }