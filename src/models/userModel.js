const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    address: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    age: Number,
    balance:{
        type:Number,
        default:100
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users
