const mongoose = require ('mongoose')
const Schema = mongoose.Schema


// const ticketSchema = new Schema({
//     seat: {
//         type: String,
//         match: /[A-F][1-9]\d?/
//     },
//     price: {
//         type: String,

//     },
//     flight: {

//     }


// })

const destinationSchema =  new Schema({
    airport: {
        type: Array,
        required: true
    }, 
    arrival: {
        type: Date,
    }
})

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
    destinations: [destinationSchema],
    
    departs:  Date,
    

 
})

module.exports = mongoose.model('Flight', flightSchema)

