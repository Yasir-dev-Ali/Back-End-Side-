class ApiResponsive extends Error{
    constructor(statsCode,data,message="Success"){
        super(message);
        this.statsCode=statsCode;
        this.data=data;
        this.message=message;
        this.sucess=statsCode<400
    }
}

export {ApiResponsive}