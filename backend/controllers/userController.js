const User = require('../db/userSchema')

const userController = {
login:async(req,res)=>{
    try {

        await res.send('user login')
    } catch (error) {
        
    }
},
user:async(req,res) => {
    try{
        await res.send('hello we get user')
    }catch(error){

    }


},
register: async(req,res)=>{
  
    try{
        /*
        const username = req.body.user
        const email = req.body.email
        const password = req.body.password
        const createUser = new Users({
            username : username,
            email: email,
            password:password
            */
           const{username,email,password} = req.body
           const user = await User.create(req.body)
           res.status(400).json({msg:'you have registered successfully'})
        //user.save()
           
        
        //const created = await createUser.save()
        
    
          
    }catch(error){
        res.status(400).send(error)
    }
}



}
module.exports = userController