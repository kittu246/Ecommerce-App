
//Rouet for user Login

import userModel from "../models/userModel.js";
import validator  from "validator"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET) 

}

const loginUser = async(req,res)=>{

    try{
        const {email,password} =req.body;
        // find user with email

        const user = await userModel.findOne({email});
        if(!user){

            return res.json({success:false,message:"User Doesn't exist"})

        }

        const isMatched = await bcrypt.compare(password,user.password);
        if(!isMatched){

            return res.json({success:false,message:"Please Provide Correct Password"})

        }

        const token = createToken(user._id);
        return res.json({success:true,token})
    
    }
    catch(err){
         console.log(err);
        res.json({success:false,message:err.message})
    }
     
     
}

//Rouet for user  Registration

const registerUser = async(req,res)=>{
    try{

        const {name,email,password} =req.body;

        // checking user already exisst or not

        const exists = await  userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User Alreday Exists"})
        }

        // validating email format and strog password
        if(!validator.isEmail(email)){
           return res.json({success:false,message:"Enter Valid Email"})
        }
        if(password.length<8){
           return res.json({success:false,message:"Please Enter Strong Password"})
        }

     // hasing user password

     const SALT = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password,SALT);

     const newUser = new userModel({
        name,email,password:hashedPassword
     })

     const user = await newUser.save()

     const token =  createToken(user._id)

     res.json({success:true,token})







    }
    catch(err){

        console.log(err);
        res.json({success:false,message:err.message})

    }
   
}

// Route for admin Login

const adminLogin = async(req,res)=>{
    try{
        const {email,password} =req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
          res.json({success:false,message:"Invalid credentials"})  
        }
       
    }
    catch(err){
        console.log(err);
        console.log(err);
        res.json({success:false,message:err.message})
    }

     
}


export {loginUser,registerUser,adminLogin} 