

let  all = require("../Functions/Logics");
let exp =require("express")
let r =exp.Router();
r.post("/save", all.Rgister);
r.get("/show", all.Read);
r.delete("/remove/:id" ,all.DeleteRecord);
r.put("/update/:id" ,all.EditRecord);
r.post("/login/" ,all.Login)


module.exports = r