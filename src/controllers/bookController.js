const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author){
        res.send("Author property is mandatory. !!!")            
    }else if(!book.publisher){
        res.send("Publisher property is mandatory. !!!")            
    }
    isAuthorValid=await authorModel.findById(book.author)
    // console.log(isAuthorValid)
    isPublisherValid=await publisherModel.findById(book.publisher)
    if(!isAuthorValid){
        res.send("Invalid Author. !!!")            
    }
    else if(!isPublisherValid){
        res.send("Invalid Publisher. !!!")            
    }else{
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})
    
}
const updateBooks=async function (req,res) {
    let publisherIds=await publisherModel.find({name:["Penguin",'HarperCollins']}).select({_id:1})
    let books=await bookModel.updateMany({publisher:publisherIds},{isHardCover:true},{upsert:true})

    let authorIds=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let books1=await bookModel.updateMany({author:authorIds},{$inc:{price:10}})

    let books2= await bookModel.find()
    // console.log(books1)
    res.send({books2})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBooks = updateBooks
