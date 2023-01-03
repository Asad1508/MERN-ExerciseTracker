const mongoose=require("mongoose")

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    duration:{
     type:String,
     required:true
    },
    user: {
        // jis user ne exercise create hogi ussi ko belong kre ga ye step
        //isme uski iD aye gi jisne create kia hogi exercise
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  // ye iss liye kab create kia note
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("MyExercises", noteSchema);

module.exports= Exercise;