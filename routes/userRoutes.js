const express=require('express')
const { loginController, registerController, authController } = require('../controllers/userctrl')
const authMiddleware = require('../middlewares/authMiddleware')

//router object 
const router =express.Router()

//login routes
router.post('/login',loginController)

//register routes
router.post('/register',registerController)

//Auth
router.post('/getUserData',authMiddleware,authController)

module.exports=router;