

let  all = require("../Functions/Logics");
let exp =require("express")
let r =exp.Router();
r.post("/save", all.Rgister);
r.get("/show", all.Read);


module.exports = r