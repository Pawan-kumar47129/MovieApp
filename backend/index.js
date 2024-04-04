//const express=require('express');
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import userRouter  from "./routes/registor.routes.js";
import cors from "cors";
const app=express();

dotenv.config({
    path:".env"
});
mongoose.connect(process.env.Mongo_URL);
const db=mongoose.connection;
db.on('error',(err)=>{
    console.log("we connot connect the dataBase", err);
})
db.once("open", () => {
    console.log("Connected to MongoDB");
  });
const corsOptions={
    origin:"http://localhost:5173"
}
app.use(cors(corsOptions))// this using because when frotend call it assume the it call same port 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/user",userRouter);
// api make for every one
// https://localhost/api/v1/user/...    here append for userRegistor url in route file
app.listen(process.env.PORT,(err)=>{
    if(err)
        console.log(`sever not start some error occure ${err}`);
    else
        console.log(`server listen at port on ${process.env.PORT}`);
    
});