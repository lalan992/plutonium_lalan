const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String,
    price:{
        type: Number,
        require:true
    },
    category: String

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)
