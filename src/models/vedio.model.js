import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema= new  mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:32
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:1000
    },
    videoUrl:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    comments:[{
        text:String,
        postedBy:{
            type:mongoose.Schema.Types.ObjectId,
            
            ref:"User"
        }
    }]
},{
    timestamps:true

})

vedioSchema.plugin(mongooseAggregatePaginate);

const Vedio=mongoose.model("Vedio",vedioSchema);

export default Vedio;