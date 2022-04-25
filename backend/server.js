const express = require('express')
const userRouter = require('./router/userRouter')
const dbConnect = require('./db/dbConnection')
//const cookieParser = require('cookieparser')
const nodemon=require('nodemon')

const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
app.use(cors())
dotenv.config()
//const app = express()

app.use(express.json())
//app.use(express.urlencoded({extended:false}))
//.app.use(cookieParser())
const port = process.env.port
app.listen(port,()=>{
    console.log(`you  are using ${port}`)
})
/*
app.use('/',(req,res)=>{
    res.json('Hello world')
})
*/
app.use('/api',userRouter);