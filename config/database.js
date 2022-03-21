const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://mda:mongodb@cluster0.m9ebu.mongodb.net/mda?retryWrites=true&w=majority")

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})