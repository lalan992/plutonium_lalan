const UserModel=require("../models/userModel")
const OrderModel = require("../models/orderModel")
const ProductModel=require("../models/productModel")

const createOrder= async function (req, res) {
    let data= req.body
    let isUserValid=await UserModel.findById(data.userId) 
    let isProductValid=await ProductModel.findById(data.productId) 
    if(!data.productId){
       return res.send({msg:"productId field is mandatory"})
    }else if(!data.userId){
        return res.send({msg:"userId field is mandatory"})
    }else if(!isProductValid){
        return res.send({msg:"productId is invalid.!!!!"})
    }else if(!isUserValid){
        return res.send({msg:"userId is invalid.!!!!"})
    }else{
        let productPrice=isProductValid.price
        let userBalance=isUserValid.balance
        // console.log(req.headers.isfreeappuser==="true")
        if(req.isFreeAppUser){
            data.amount=0;
            data.isFreeAppUser=true;
            let savedData= await OrderModel.create(data)
            res.send({msg: savedData})
        }else{
            data.isFreeAppUser=false;
            if(userBalance>=productPrice){
                userBalance=userBalance-productPrice;
                data.amount=productPrice;
                let updatedUser=await UserModel.findByIdAndUpdate(data.userId,{balance:userBalance},{new:true})
                let savedData= await OrderModel.create(data)
                res.send({msg: savedData,user:updatedUser})
            }else{
                res.send({alert:"User has insufficient balance.!!!!"})
            }
        }
    }
}

const getOrdersData = async function (req, res) {
    let allOrders = await OrderModel.find()
    res.send({ msg: allOrders })
}

module.exports={
    createOrder,
    getOrdersData
}
