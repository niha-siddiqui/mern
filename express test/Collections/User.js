let mongo =require("mongoose");
 let user_stracture = mongo.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:Number,
        default:"karachi"
     
    },
    age:{
        type:String,
        required:true
    },
      Record_time:{
        type:Date,
       default:Date.now()
    },
 })

 module.exports = mongo.model("users" , user_stracture)