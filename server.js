const express=require("express")

const moragan=require('morgan')
const dotenv=require('dotenv');
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app=express()

//middlewares
app.use(express.json())
app.use(moragan('dev'))

//routes
app.use('/api/v1/user',require("./routes/userRoutes"));
console.log('Routes loaded')

//port
const port=process.env.PORT || 8080;
console.log(`using port:${port}`);
//Listen Port
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`)
})