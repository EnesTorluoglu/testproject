const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: { type:String, required: true},
    name: { type: String, required: true },
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },
        city: { type: String, required: true },
        zipcode: { type: String, required: true },
        geo: {
            lat: { type: Number},
            lng: { type: Number},
        }
    },
    phone: {type: String, required: true},
    website: {type: String, required: true},
    company: {
        name: { type: String, required: true },
        catchPhrase: {type: String, required: true},
        bs: {type: String, required: true},
    }
})

module.exports = mongoose.model('User', userSchema);