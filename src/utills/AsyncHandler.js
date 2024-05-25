const AsyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req, res,next)).catch((er)=>next(er))

    }

}



// }

export {AsyncHandler};



// const AsyncHandler =(fn)=> async (req,res ,next)=>{

   
// try {
//     await fn(req,res , next)

    
// } catch (error) {
//     res.status(err.code || 500).json({
//         status:"fail",
//         message:err.message 
//     })
    
// }

// }