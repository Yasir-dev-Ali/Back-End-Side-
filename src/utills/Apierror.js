class ErrorApi extends Error{
    constructor(
        message="Internal Server Error",
        statusCode,
        errors=[],
        stack=""

    ){
        super(message);
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        this.stack=stack

        if (stack) {
            this.stack = stack
          }
          else{
                Error.captureStackTrace(this, this.constructor)
          }

    }
   
        
    }

export default ErrorApi;
     

    
