const bookAuthor_Model=require("../models/bookAndAuthorModel")

const book_model=bookAuthor_Model.book_model
const author_model=bookAuthor_Model.author_model

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await book_model.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await author_model.create(data)
    res.send({msg: savedData})
} 
const booksByChetanbhagat =async function(req,res){
    let myauthor= await author_model.findOne( {author_name:"Chetan Bhagat"})
    let allBooks= await book_model.find({author_id:myauthor.author_id})
    res.send({msg: allBooks})
}
const authorOfTwostates =async function(req,res){
    let mybook= await book_model.findOneAndUpdate( 
        {name:"Two states"},
        { $set: {price: 100}},
        {new: true}
        );
    let myauthor=await author_model.findOne({author_id:mybook.author_id})
    res.send({msg:{"author": myauthor.author_name,"updatedPrice":mybook.price}})
}

const booksWithCostsBetween50and100 =async function(req,res){
    
    let allBook=await book_model.find({price:{ $gte: 50, $lte: 100} }).select({ author_id :1,_id:0}); 
    let author_ids= allBook.map((x)=>x.author_id)
    let allauthor=await author_model.find({author_id:{$in:author_ids}}).select({author_name :1,_id:0});
    
    res.send({msg:allauthor})
}


module.exports={
    createBook,
    createAuthor,
    booksByChetanbhagat,
    authorOfTwostates,
    booksWithCostsBetween50and100
}