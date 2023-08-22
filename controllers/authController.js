import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';



export const registerController = async (req,res) => {
    try {
        const {name,email,password,mobile,address} = req.body

        //Validations
        if(!name){
            return res.send({message:'Name is Required'})
        }
        if(!email){
            return res.send({message:'Email Id is Required'})
        }
        if(!password){
            return res.send({message:'Password is Required'})
        }
        if(!mobile){
            return res.send({message:'Mobile Number is Required'})
        }
        if(!address){
            return res.send({message:'Address is Required'})
        }

        //check user
        const existingUser = await userModel.findOne({email})

        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message : "Email is alraedy registered , please login",
            })
        }

        //register user
        const hashedPassword = await hashPassword(password);

        //save
        const user = await new userModel({
            name,
            email,
            mobile,
            address,
            password: hashedPassword,
        }).save()

        res.status(201).send({
            success:true,
            message : 'User Registartion Successfull.',
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Registration' ,
            error
        })
    }
};

//POST LOGIN
export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body

        //Validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid Email or Password'
            })
        }

        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not Registered'
            })
        }

        //check password
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }

        //token 
        const token = await JWT.sign({_id: user._id }, process.env.JWT_SECRET , {expiresIn: "7d"});
        res.status(200).send({
            success:true,
            message : 'Login Successful',
            user:{
                name:user.name,
                email:user.email,
                mobile:user.mobile,
                address:user.address
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
}


//test controller
export const testController = (req,res) => {
    res.send('Protected Route');
}