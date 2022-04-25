//const express = require('express')
//const express = require('express')
//const app = require()
const userController = require('../controllers/userController')
const express = require('express')
const userRouter = express.Router()

userRouter.get('/user/',userController.user);
userRouter.post('/user/login',userController.login)
userRouter.post('/user/create',userController.register)
//userRouter.post('/user/register',userController.register)
module.exports = userRouter
