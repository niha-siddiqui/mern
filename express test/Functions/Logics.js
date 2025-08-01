const User = require("../Collections/User");
let bb = require("bcrypt");
const e = require("cors");
let mail = require("nodemailer");
let jwt=require("jsonwebtoken")
  require("dotenv").config()


let secure_info =mail.createTransport({
  service :"gmail",
  auth:{
    user : process.env.EMAIL,
    pass: process.env.PASSKEY
  }
})



 let all_func ={
    Rgister : async function(req ,res){
      try{
       let{name,email,password,age}= req.body;

       let email_check = await User.findOne({email : email})
       if (email_check){
        res.status(409).json({msg : "Email Already Exist"})
       } else{
        let hashed_p = bb.hashSync(password,15)
        let u =new User({
          name : name,
          email : email,
          password : hashed_p,
          age : age,
        })
        await u.save()
        res.status(200).json({msg : "data saved successfully"})
       }


        let EmailBodyInfo = {
          to : email,
          from : process.env.EMAIL,
          subject :"Account has been registered successfully",
          html : `<h3>Hello${name}</h3><br/><p>account has been registered</p>`
        }

        secure_info.sendMail(EmailBodyInfo, function(e,i){
          if (e) {
            console.log(e)
            
          } else {
            console.log("Email has been sent")
            
          }
        })
   
       
   }catch(error){
      res.status(504).json({msg : error.message})

   }
   
   },
  
  Read : async function(req,res){
    try {
      let user_data =await User.find().
      sort({Record_time : -1})
      res.status(201).json(user_data)
      
    } catch (error) {
      console.log(error.msg)
      res.status(504).json({msg :error.msg})
      
    }
  },
  DeleteRecord : async function(req,res){
    try {
      let {id} =req.params
      let dhundo = await User.findById(id)
      if(!dhundo){
        res.status(404).json({msg:" record doesnot found"})
      }
      else{
        await User.findByIdAndDelete(dhundo)
        res.status(201).json({msg:" record deleted"})
  
      }
      
    } catch (error) {
      res.status(504).json({msg:error.message})
    
      
    }
  },
  EditRecord : async function(req,res){
    try {
      let {id} =req.params
      let {name,email,password,city} = req.body
      let dhundo = await User.findById(id)
      if(!dhundo){
        res.status(404).json({msg:" record doesnot found"})
      }
      else{
        let naya_password =bb.hashSync(password,15)
        await User.findByIdAndUpdate(id,{
          name:name,
          email: email,
          password:naya_password,
          city:city
        })
        res.status(201).json({msg:" record updated"})
  
      }
      
    } catch (error) {
      res.status(504).json({msg:error.message})
    
      
    }
  },

  Login: async function (req,res){
    try {
      let {email, password} =req.body;
      let email_check= await User.findOne({email :email})
      if(!email_check){
        res.status(404).json({msg : "Email not found"})
      }
      let password_check = bb.compareSync(password ,email_check.password)
      if(!password_check){
        res.status(404).json({msg : "password is invalid"})
      }
      let mera_token =jwt.sign({id: email_check._id},"niha" ,{expiresIn :"5h"})
      res.status(200).json({mera_token,
        user :{id :email_check._id , name :email_check.name ,email: email_check.email},
        msg : "login Successfully"
      })
    } catch (error) {
      res.status(504).json({msg : error.message})
      console.log(error.message)
      
    }
  }

}
        
 


   module.exports = all_func 

  