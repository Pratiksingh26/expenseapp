import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const router = Router()

router.post("/register", async(req,res) => {

    //first take data from body

    const {email,password,firstName,lastName} = req.body
    //console.log(req.body)
     
    //now check if user already exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.send(406).json({message:"User is already registered"})
        //406 = not acceptable
        return;
    }

    //hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const user = await User({email,password:hashedPassword,firstName,lastName})
    await user.save();
    console.log(user)

    res.status(201).json({message:"user is created"})
})


router.post("/login", async(req,res) => {
    const {email,password} = req.body;

    const userExists = await User.findOne({email});

    if(!userExists){
        res.status(406).json({message:"Credentials Not Found"})
        return;
    }

    const matched = await bcrypt.compare(password,userExists.password);
    if(!matched){
        res.status(406).json({message:"Credentials Not Found"})
        return;
    }

    //if matched then create jwt token
    const token = jwt.sign({},"some secret.");
    console.log(token);
    res.json({message: "user successfully logged in.",token})
})

export default router;