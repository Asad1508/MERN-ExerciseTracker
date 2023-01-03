const Exercise =require("../Models/noteModel")
const asyncHandler=require("express-async-handler")
const User =require("../Models/userModel");
const generateToken = require("../utils/generateToken");
class Exercises{
    static getexercise=asyncHandler( async(req,res)=>{
        // ye req.user middleware se arha
      const exercise=await Exercise.find({user:req.user._id})
      res.json(exercise)
    })

    
    static createexercise = asyncHandler(async (req, res) => {
        const { title, content, category,duration } = req.body;
      
        if (!title || !content || !category || !duration) {
          res.status(400);
          throw new Error("Please Fill all the feilds");
          return;
        } else {
            // req.user._id isme jo currently logged in hoga wo aye ga
            // ye req.user middleware se arha
          const note = new Exercise({ user: req.user._id, title, content, category,duration });
      
          const createdNote = await note.save();
      
          res.status(201).json(createdNote);
        }
      });
      static getNoteById = asyncHandler(async (req, res) => {
        // req.params.id me :id arhi 
        const note = await Exercise.findById(req.params.id);
      
        if (note) {
          res.json(note);
        } else {
          res.status(404).json({ message: "Note not found" });
        }
      
        res.json(note);
      });
     static Updatenotes = asyncHandler(async (req, res) => {
        const { title, content, category,duration } = req.body;
      
        const note = await Exercise.findById(req.params.id);
        // yaha dekh rhe currently looged user ki id ko notes ki id se
        if (note.user.toString() !== req.user._id.toString()) {
          res.status(401);
          throw new Error("You can't perform this action");
        }
      
        if (note) {
          // note.title DB wlay aur = k bd wala jo update hoga
          note.title = title;
          note.content = content;
          note.category = category;
          note.duration=duration
      
          const updatedNote = await note.save();
          res.json(updatedNote);
        } else {
          res.status(404);
          throw new Error("Note not found");
        }
      });
      static DeleteNote = asyncHandler(async (req, res) => {
        const note = await Exercise.findById(req.params.id);
        // jis id se note create howa agr wo currently looged user k equal na hoi tu action perform ni kr skta
        if (note.user.toString() !== req.user._id.toString()) {
          res.status(401);
          throw new Error("You can't perform this action");
        }
      
        if (note) {
          await note.remove();
          res.json({ message: "Note Removed" });
        } else {
          res.status(404);
          throw new Error("Note not Found");
        }
      });
}
module.exports=Exercises