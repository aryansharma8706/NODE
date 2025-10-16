// const express = require('express') ;
// const mongoose = require('mongoose')
// const app = express() ;
// const userRoutes = require('express')
// const connectDB = async()=>{
//     try {
//         const connection = await mongoose.connect('mongodb://127.0.0.1:27017/mongodbTR3')
//         console.log('CONNECTION SUCCESSFULL')
//     } catch (error) {
//         console.log(error)
//     }
// }

// connectDB()

// app.use('/api/v1' , userRoutes) ;

// app.listen(3000,()=>{
//     console.log('server is running on 3000')
// })

//crud apis


const user = require('../models/user')

exports.createUser = async (req,res)=>{
    try{
        const {name , email , age} = req.body ;
        consg userExists = await user.findOne({email:email});
        if(userExists){
            return res.status(400).json({
                success : false ,
                message : "user already exists"
            })
        }   
    }