const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema({
  username:{
      type:String,
      required:true,
      unique:true

  },
  email:{
      type:String,
      required:true,
      unique:true

  },
  password:{
      type:String,
      required:true,


  } 


})
//hashing password for secure
/*
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password,10);

    }
    next()

    
})
//Generate token to verify user
userSchema.method.generateToken = async function(){
    try {
        let generateToken = jwt.sign({_id: this,_id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:generatedToken})
        await this.save()
        return generateToken
    }catch(error){
        console.log(error)
        
    }


}
*/ 
//const Users =  new mongoose.model("USER",userSchema)
//module.exports = Users;
//export default mongoose.model('User',userSchema);

module.exports = mongoose.model('User',userSchema)