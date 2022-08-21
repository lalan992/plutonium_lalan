const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    price: Number,
    ratings: Number,
    author: {
        type: ObjectId,
        require:true,
        ref: "Author"
    },
    publisher:{
        type:ObjectId,
        require:true,
        ref:"Publisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
