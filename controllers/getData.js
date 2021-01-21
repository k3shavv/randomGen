const express=require('express');
const RandomCode=require('../components/codes.js');
const mongoose=require('mongoose');
const Codes=require('../models/Codes.js')
const router = express.Router();



/*
//method   POST  
//desc     for getting the subject and series
//PUBLIC
*/
router.post('/ss',async(req,res)=>{
  
    console.log(req.body)
    const subject=req.body.subjectVal;
    const series=req.body.seriesVal;
    
    //generating the random sequence
    const result=RandomCode.generate(subject,series);
    /*saving series to database */
    let row= new Codes({subject:subject,series:series,sequence:result});
    row.save((err) => {
            if (err)
                return console.error(err);
            console.log('data saved');    
        });
    // sending the random sequence
    res.json({result:result});   
})


/*
//method   GET 
//desc     for getting all the data
//PUBLIC
*/
router.get('/ss',async(req,res)=>{
    
    Codes.find({},(err,result)=>{
        if(err){res.send(err)}
        else res.send(result);
    })
       
})
  
  
module.exports=router;  