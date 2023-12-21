import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();
const app = express();
app.use(express.json())
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
app.use('/api/auth',authRouter)