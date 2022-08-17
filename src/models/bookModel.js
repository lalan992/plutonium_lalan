const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require:true
    }, 
    year:{
        type:Number,
        default:2021
    },
    authorName: String, 
    tags: [String],
    totalPages:Number,
    stockAvailable :Boolean,
    // isPublished: Boolean,
    // sales: {type: Number, default: 10},
    price: {
        indianPrice:String,
        europeanPrice:String
    }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
