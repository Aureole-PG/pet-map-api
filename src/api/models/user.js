const {Schema, model} = require('mongoose')
const userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'nombre es requerido'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email es requerido'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password es requerido'],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})

userSchema.methods.toJSON = function(){
    // eslint-disable-next-line no-unused-vars
    const {__v, password, ...user} = this.toObject()
    return user 
}
module.exports = model('User', userSchema);
