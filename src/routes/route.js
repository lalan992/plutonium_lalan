const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post('/createProduct',ProductController.createProduct)
router.get('/getProductsData',ProductController.getProductsData)

router.post('/createUser',commonMW.isFreeUser,UserController.createUser)
router.get('/getUsersData',UserController.getUsersData)

router.post('/createOrder',commonMW.isFreeUser,OrderController.createOrder)
router.get('/getOrdersData',OrderController.getOrdersData)

module.exports = router;