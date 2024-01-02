import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("connected to MongoDB!");
}).catch((error)=>{
    console.log(error);
})


app.listen(3000,()=> {
    console.log("server is running on port 3000");
})

app.use('/api/user', UserRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*',(req,res)=> {

    res.sendFile(path.join(__dirname, 'client','dist','index.html'));

});




app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });

});