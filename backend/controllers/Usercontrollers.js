const asyncHandler=require("express-async-handler")
const User =require("../Models/userModel");
const generateToken = require("../utils/generateToken");
class Users{
    static registerUser=asyncHandler( async(req,res)=>{
        const { name, email, password, pic } = req.body;

        const userExists = await User.findOne({ email });
      
        if (userExists) {
          res.status(404);
          throw new Error("User already exists");
        }
      
        const user = await User.create({
          name,
          email,
          password,
          pic,
        });
      
        if (user) {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:generateToken(user._id)
          
          });
        } else {
          res.status(400);
          throw new Error("User not found");
        }
    })
    
    static loginuser = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
      
        const user = await User.findOne({ email });
      
        if (user && (await user.matchpasswr(password))) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
          });
        } else {
          res.status(401);
          throw new Error("Invalid Email or Password");
        }
      });
       static updateUserProfile = asyncHandler(async (req, res) => {
        // yaha user ki id le rhe jo update krna chahta 
        //ye id middle ware se arhi token se jisne login kia
        const user = await User.findById(req.user._id);
      
        if (user) {
          // yaha user.name user.email user.pic me req.body.name,email,pic jo k front end searhi 
          user.name = req.body.name || user.name;
          user.email = req.body.email || user.email;
          user.pic = req.body.pic || user.pic;
          if (req.body.password) {
            user.password = req.body.password;
          }
      
          const updatedUser = await user.save();
        //  after saving front end me info bhj rhe 
          res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            pic: updatedUser.pic,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          });
        } else {
          res.status(404);
          throw new Error("User Not Found");
        }
      });
      
     
      
}
module.exports=Users