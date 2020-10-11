const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    message: {
        type: String,
        lowercase: true
    }
})

module.exports = mongoose.model('subscriber', subscriberSchema)