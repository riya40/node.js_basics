const mongoose = require('mongoose')


//schema body
const pilotSchema = new mongoose.Schema({
    name:String ,
    airlines:String,
    email:String
})

const Pilot = mongoose.model('Pilot',pilotSchema);

module.exports = Pilot;