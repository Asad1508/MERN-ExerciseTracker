const express=require('express')
const app=express()
const dotenv=require("dotenv")
const notes =require("./data/notes")

dotenv.config()
app.get("/",(req,res)=>{
    res.send("Api is running")
})

app.get("/api/notes",(req,res)=>{
    res.json(notes)
})

const PORT=process.env.PORT
app.listen(PORT,console.log(`server is listening ${PORT}`))