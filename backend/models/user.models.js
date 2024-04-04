import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    }

},{timestamps:true,versionKey:false})

export default mongoose.model('User',userSchema);