const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline:{ 
        type: String, 
        required: true,
    }, 
    airport: {
        type:String,
        required: true,
    },

    flightNo: {
        type: Number,
        required: false,
    },
    departs:  Date,
 
})

module.exports = mongoose.model('Flight', flightSchema)

