const mongoose=require("mongoose")

const _bookschema=new mongoose.Schema({
    
    name:String,
    author_id:{
        type:Number,
        require:true
    },
    price:Number,
    ratings:Number


});

const authorschema=new mongoose.Schema({
    
    author_id:{
        type:Number,
        require:true,
        unique:true
    },
    author_name:String,
    age:Number,
    address:String
});

module.exports.book_model= new mongoose.model("book",_bookschema)
module.exports.author_model= new mongoose.model("author",authorschema)