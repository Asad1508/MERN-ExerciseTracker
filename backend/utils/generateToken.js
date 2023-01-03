const jwt=require("jsonwebtoken")

//iss id me user ki id arhi jo register kre ga
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"30d",
    })
}


module.exports=generateToken