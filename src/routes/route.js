const express = require('express');
const helper = require('../util/helper')
const router = express.Router();
let voters=helper.voters;
const myplayer=helper.player;
const booking=helper.bookings;

router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    const newplayer=req.body;
    let isPlayer=myplayer.map((x)=>x.name).includes(newplayer.name);
    if(!isPlayer){
        myplayer.push(newplayer)
        res.send(  { data: myplayer , status: true }  )
    }else{
        res.send("This player already exists!!!")
    }
    
})

router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    //LOGIC WILL COME HERE
    const newPlayerInfo=req.body;
    const newplayer=req.params.playerName;
    const newBookingId=req.params.bookingId;
    let isPlayer=myplayer.map((x)=>x.name).includes(newplayer);
    let isBooked=booking.map((x)=>x.bookingNumber).includes(Number(newBookingId));
    if(!isPlayer){
        res.send("This player doesn't exists.!!!")
    }else
    { 
        if(isBooked){
        res.send("Your booking was already processed.!!!")
        }else{

            booking.push(newPlayerInfo);
            res.send( {info:"booking confirmed", data: newPlayerInfo , status: true }  )
        }
    }
    
});

router.post('/voters/:votingAge', function(req,res){
    const newVotingAge=req.params.votingAge;
    voters=voters.map((x)=>{if(x.age>=newVotingAge)x.votingStatus=true; else x.votingStatus=false; return x});
    res.send({data:voters});
});

router.get('/test-me', function (req, res) {
    
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason

