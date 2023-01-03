const express=require('express')
const app=express()
const dotenv=require("dotenv")
const notes =require("./data/notes")
const userRoutes=require("./routes/Userroutes")
const userNotes=require("./routes/noteRoutes")
const connectdbs=require("./DB/db")
const path=require('path')
const { notFound, errorHandler } = require('./middleware/middleware')
dotenv.config()
connectdbs()
app.use(express.json())


app.use("/api/users",userRoutes)
app.use("/api/notes",userNotes)

__dirname=path.resolve()
if(process.env.NODE_ENV === "production"){
    // yaha current path ko build path se join kr rhe build me static files ha
app.use(express.static(path.join(__dirname,'/frontend/build')))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
})
}
else{

}
const PORT=process.env.PORT
app.listen(PORT,console.log(`server is listening ${PORT}`))