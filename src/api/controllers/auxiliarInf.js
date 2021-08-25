const  Pet = require('../models/pet');
const User = require('../models/user');

exports.PetInfo = async (req, res) =>{
    try {
        const pet = await Pet.find();
        const data = await  pet.map((e) => {
            return User.findOne({ _id: e.user_id }).then(user=>{
                return {
                    _id: e._id,
                    gps_id: e.gps_id,
                    name: e.nombre,
                    owner: user.nombre,
                    email: user.email,
                    owner_id: user._id
                }
            });
        })
        const petInfo = await Promise.all(data).then(e=>e)
        res.status(200).json({petInfo})
    } catch (error) {
        res.status(400).json({msg:" error", error})
    }
}