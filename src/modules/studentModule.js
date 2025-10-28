// to store the data
import mongoose from "mongoose";

// structre
const studentSchema=mongoose.Schema({

    name:{ type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    usn:{
        type:Number,
        required:true
    },
    isactive:{
        type:Number,
        defaultValue:1

    }
})
export default mongoose.model("students",studentSchema)