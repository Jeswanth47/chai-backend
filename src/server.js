import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

import express from 'express'
const app=express()

connectDB()


/*
(async() =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
        app.on("error",()=>{
            console.log("Error: ",error)
            throw error
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch(error) {
        console.error("Error: ", error);
        throw error;
    }
})()*/