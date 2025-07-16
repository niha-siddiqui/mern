const User = require("../Collections/User");

 let all_func ={
    Rgister : async function(req ,res){
      try{
       let{name,email,password,age}= req.body;
       let u =new User({
         name : name,
         email : email,
         password : password,
         age : age,
       })
       await u.save()
       res.status(200).json({msg : "data saved successfully"})
       
   }catch(error){
      res.status(404).json({msg : error.message})

   }
   
   }}
   
   module.exports = all_func 

  