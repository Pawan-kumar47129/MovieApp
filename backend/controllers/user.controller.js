import userModel  from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const Registor = async(req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(401).json({
        message: "please provide compelety data",
        success: false,
      });
    }
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(401).json({
        message: "This email is already present",
        success: false,
      });
    } else {
      const createdUser = await userModel.create({
        fullname: fullname,
        email: email,
        password: bcrypt.hashSync(password,16)
      });
      return res.status(201).json({
        message:"account create successfully",
        success:true,
      })
    }
  } catch (error) {
    console.log("Not able to create new user try later on",error);
    res.status(401).send({
      message: "Not able to create",
      success: false,
    });
  }
};

export const Login=async (req,res)=>{
  try {
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(401).json({
        message:"please provide complete data",
        success:false,
      });
    }
      const checkData=await userModel.findOne({email:email});
      if(!checkData){
        return res.status(401).json({
          message:"Invalid email or password",
          success:false
        })
      }

      if(!bcrypt.compareSync(password,checkData.password)){
        return res.status(401).json({
          message:"Invalid email or password",
          success:false,
        })
      }
      const tokenData={
        id:checkData._id
      }
      const token=jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"1d"})
      res.status(200).cookie("token",token,{httpOnly:true}).json({
        message:`welcome ${checkData.fullname}! in Cinemamovie`,
        success:true
      })
    
  } catch (error) {
    console.log("Some error will occure try some time later");
    res.status(401).json({
      message:"sever error occure",
      success:false
    })
  }
}

export const Logout=async (req,res)=>{
  res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
    message:"Logged out successfully",
    success:true
  })
}