const express=require("express")
const router=express.Router()
const Users=require("../controllers/Usercontrollers")
const { protect } = require("../middleware/authMiddleware")

router.post('/register',Users.registerUser)
router.post('/login',Users.loginuser)
// protect dia 1 middlewarejis se jo authorize hoga whi update kr sky ga
router.post('/profile',protect,Users.updateUserProfile)

module.exports=router