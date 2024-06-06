// Export cloudinary configuration
// Import this file in the file where you want to use cloudinary

import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import {fs} from "fs";

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

          
cloudinary.config({ 
  cloud_name: `${process.env.CLOUDINARY_NAME}`, 
  api_key: `${process.env.CLOUDINARY_KEY}`, 
  api_secret: `${process.env.CLOUDINARY_SECRET}` 
});


// Function to upload image to cloudinary
// The function takes the image path as an argument
// The function returns the image url
const uploadFile= async (localPathFile)=>{
    try {
        if(!localPathFile){
            cloudinary.uploader.upload(localPathFile,{
                resource_type:"auto"
            })
            // file uploaded are the Successfully
            console.log("File Upload on Cloudinary", response.url);
            return response
        }
        
    } catch (error) {
     fs.unlinkSync(localPathFile)     
     return null;
        
    }
}


export {uploadFile}