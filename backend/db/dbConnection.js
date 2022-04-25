const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
url = process.env.DATABASE_ACCESS
const dbConnect = (mongoose.createConnection(url,{
    useNewUrlParser: true,
//    useUnifiedTopology:true

    
},(error)=>{
    if(error){
        console.log('there is error during connecting to Server owing to',error)
    }else{
        console.log('Connect successfully')
    }
}))
module.exports = dbConnect