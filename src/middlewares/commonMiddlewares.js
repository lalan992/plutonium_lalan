const moment=require('moment')
var ip = require("ip");

const always=function(req, res, next){
    let today=moment().format('YYYY-MM-DD hh:mm:ss')
    console.log(`${today} , ${ip.address()} , ${req.url}`);
    next()
}

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports={mid1,
    mid2,
    mid3,
    mid4,
    always
}

