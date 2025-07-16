let  all = require("../Functions/Logics");
let exp =require("express")
let r =exp.Router();
r.post("/save", all.Rgister);
r.get("/l", all.Login);

module.exports = r