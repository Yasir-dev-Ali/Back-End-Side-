import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
import { DB_NAME } from "../constants.js";

const Db_Connection= async ()=>{
    try{
        await mongoose.connect(`${process.env.MongoDb_URL}/${DB_NAME}`,{
           
        });
        console.log(`Database connected successfully`);
    }catch(err){
        console.log("Error in connecting database");
        process.exit(1);

    }
}

export default Db_Connection;