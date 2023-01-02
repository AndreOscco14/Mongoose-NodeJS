const { Schema , model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        // unico
        unique: true,
        require: true
    },
    password: String,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('User', UserSchema)