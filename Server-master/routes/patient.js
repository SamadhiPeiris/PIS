const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const database = require('../databaseHandle/connectDatabase');
var randomstring = require("randomstring");

router.post("/addPatient", function (req, res) {

    var patientId = randomstring.generate(7);


    const patientData = [
        patientId,
        req.body.dob,
        req.body.occupation,
        req.body.bloodType,
        req.body.maritalState,
        req.body.height,
        req.body.weight,
        req.body.NIC,
       
    ]
    database.addPatient(patientData, function (err, result) {
        console.log(patientData,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
        if (err) {
            console.log(err);
            if(err.sqlState =="23000"){
                res.json({success : false , msg : "already registerd"});
                return;
            }
            res.json({ success: false, msg: "something wrong please try again" });
        }
        else {
            res.json({ success: true, msg: "Patient added" });
        }
    });
})

router.post("/searchPatient",function(req,res,next){
    // const NIC  = req.body.NIC;
    const email  = req.body.email;

    database.searchPatient(email,function(err,result){
        console.log(result);
        if(err){
            console.log(err);
            res.json({success : false , massage : "Error something wrong"});
        }else{
            console.log(result);
            res.json({msg: result})
            
        }
    })
})

module.exports = router;
