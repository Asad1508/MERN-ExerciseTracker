
const mongoose=require("mongoose")
const bcrypt =require("bcryptjs")

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    // iska matlab jo b update change kre gy track kre ga
    timestamps: true,
  }
);

//yaha login krty time user jo password enter kre ga usko db me encrypted pass se match kre ga aur login krde ga
userSchema.methods.matchpasswr=async function(enteredpass){
    return await bcrypt.compare(enteredpass,this.password)
}
//registration se pehly encrypt krde ga pass ko db me jane se pehly 
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})


const User=mongoose.model("User",userSchema)
module.exports=User