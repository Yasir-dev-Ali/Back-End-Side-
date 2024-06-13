import mongoose ,{Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true ,
        trim: true,
        unique:true,
        maxlength:32,
        index:true

    },
    email: { 
        type: String, 
        required: true,
        trim: true,
        unique:true

    },
    password: { 
        type: String, 
        required: true 
    },  
    refreshToken:{
        type:String

    },
    role: { 
        type: String, 
        default: "user" 
    },
    avatar: { 
        type: String ,
        default: "https://res.cloudinary.com/dxkufsejm/image/upload/v1627887987/avatars/avatar_qtqjxw.png",

    },
    coverImage:{
        type: String ,

    },
    // watchHistroy:{
    //     type: Schema.type.ObjectId,
    //     ref:"Movie" 


    // },
   
}, {
    timestamps: true
});

userSchema.pre("save", async function (next){
    if(this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.isPasswordCorrect= async function (password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= async function (){
    return jwt.sign({id:this._id,
        email : this.email,
        name: this.name
    }, process.env.ACCESS_TOKEN_KEY, {expiresIn: process.env.EXPIRY_TOKEN_KEY})
} 

userSchema.methods.generateRefreshToken= async function (){
    return jwt.sign({id:this._id,
        email : this.email,
        name: this.name
    }, process.env.REFRESH_TOKEN_KEY, {expiresIn: process.env.REFRESH_TOKEN_EXPIRY})


}
const User = mongoose.model("User", userSchema)
export  {User};
