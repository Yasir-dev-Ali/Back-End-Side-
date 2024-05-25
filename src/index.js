import  express from "express"
const app =express();
import Db_Connection from "./Db/Database.js"
import dotenv from "dotenv"
dotenv.config();

const port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
}
)

Db_Connection();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}

)
