const ProductModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data = req.body
    let savedData= await ProductModel.create(data)
    res.send({data: savedData})
}

const getProductsData= async function (req, res) {
    let allProducts= await ProductModel.find()
    res.send({msg: allProducts})
}

module.exports={
    createProduct,
    getProductsData
}
