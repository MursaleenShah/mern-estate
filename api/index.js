import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error, log } from 'console';
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("connected to MongoDB!");
}).catch((error)=>{
    console.log(error);
})


app.listen(3000,()=> {
    console.log("server is running on port 3000");
})