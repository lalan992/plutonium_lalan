const mongoose = require('mongoose');


const bookSchema= new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:Number
})

module.exports = mongoose.model('Book', bookSchema) //books


// Create a bookSchema with Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 