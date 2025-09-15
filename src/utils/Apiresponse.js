class Apiresponse{
    constructor(stausCode , data , message = "" , sucess = true , errors = []){
        this.statusCode=stausCode;
        this.data= data;
        this.message= message;
        this.sucess= stausCode < 400
        
    }
}