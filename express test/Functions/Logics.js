const User = require("../Collections/User");
let bb = require("bcrypt");

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
   
       
   }catch(error){
      res.status(504).json({msg : error.message})

   }
   
   }}
   
   module.exports = all_func 

  