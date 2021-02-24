const { Schema, model } = require('mongoose')

const gpsSchema = new Schema({
    gps_id :{
        type: String,
        required: [true, 'gps requerido'],
        trim: true,
    },
    longitud:{
        type: String,
        required: [true, 'longitud requerido'],
        trim: true,
    },
    latitud:{
        type: String,
        required: [true, 'latitud requerido'],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
})

module.exports = model('gps', gpsSchema);