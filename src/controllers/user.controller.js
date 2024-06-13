import {AsyncHandler} from "../utills/AsyncHandler.js"
import {ErrorApi} from "../utills/Apierror.js"
import {User} from "../models/user.model.js"
import {upload} from "../utills/cloudnary.js"
import { ApiResponsive } from "../utills/ApiResponsive.js"

const register= AsyncHandler(async(req,res)=>{
    
        // get Information from front End
        // Valide - or not
        // check user already exits : username, email
        // check image , check avatar
        // upload the cloudinary
        // create user object  -create enter in db
        // remove the password & refresh token feild  from resposive
        // check for the user creation
        // return res
        const {name, password ,email}= req.body 
        // console.log(`UserName : ${username} ,  Password : ${password} , Email : `, email);
       if(
        [name ,email,password,email ].some((feild)=>
         feild?.trim()=== ""
       )
       ){
        throw new ErrorApi(400,"All Required Feild ")
       }
      const exitesUser= User.findOne({
               $or:[{name},{email}]
      })
               if(exitesUser){
                throw new ErrorApi(400,"User Already Exits")
               }
               const avatarLocalpath=req.file?.avatar[0]?.path;
                const coverImageLocalpath=req.file?.coverImage[0]?.path;
                if(!avatarLocalpath){
                    throw new ErrorApi(400,"Avatar is Required")
                }
                const avatar= await upload(avatarLocalpath);  
                const coverImage= await upload(coverImageLocalpath);
                if(!avatar){
                    throw new ErrorApi(400,"Avatar is Required")
                }
                if(!coverImage){
                    throw new ErrorApi(400,"Cover Image is Required")
                }
                const user= await User.create({
                    name,
                    email,
                    password,
                    avatar:avatar.url,
                    coverImage
                })
                if(!user){
                    throw new ErrorApi(400,"User Not Created")
                }
                // Find the user of Id 
            const createUser =   await User.findById(user._id).select(
                "-password  -refreshToken"
            );
            if(!createUser){
                throw new ErrorApi(500,"Something went to Wrong")
            }

            res.status(201).json(
                new ApiResponsive(200,createUser,"User Register SuccessFully !")
            )


                
})


export {register}



