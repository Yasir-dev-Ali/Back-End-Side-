import  express from "express"
const app =express();
import Db_Connection from "./Db/Database.js"
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
});


// Database Connection 
Db_Connection()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);


    })
})
.catch((err)=>{
    console.log("Error in connecting database",err);
    process.exit(1);

});


