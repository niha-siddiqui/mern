
let exp  = require("express");
require("dotenv").config();
let route = require("./Routes/route")
let db =require("./connection")
let cor =require("cors");

let port_no =process.env.PORT || 4000
let app = exp()
  
  
    app.use(cor())
    app.use(exp.json())
    app.use("/",route);
  

db().then(()=>{
    app.listen(port_no,function(){
        console.log(`server started at http://localhost:${port_no}/`)
})
    }).catch((e)=>{
        console.log(e.message)
    })
