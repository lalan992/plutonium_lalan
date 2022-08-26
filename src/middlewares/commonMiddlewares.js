
const isFreeUser= function(req,res,next){
    
    if(req.headers.isfreeappuser===undefined)
    res.send({msg:"The request is missing a mandatory header"})
    else{
        req.isFreeAppUser=Boolean(req.headers.isfreeappuser)
        // console.log(req.isFreeAppUser)
        next()
    }
}

module.exports={
    isFreeUser
}