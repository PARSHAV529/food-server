const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://parshav143:neh59@cluster0.igjbssc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db