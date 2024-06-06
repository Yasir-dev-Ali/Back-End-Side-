import Db_Connection from "./Db/Database.js"
import dotenv from "dotenv"
import { app } from "./app.js";

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
.catch(()=>{
    console.log("Error in connecting database");
    process.exit(1);

});


// Route
// import userRoute from "./routes/user.route.js"; 
// app.use("/api/user",userRoute)

