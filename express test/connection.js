let mongo =require("mongoose");
require("dotenv").config();

let db_url = process.env.URL;
let Database_Connect = async function(){
    if (!db_url) {
        console.log("Database not connected")
        
    } else {
        try {
            mongo.connect(db_url);
            console.log("Database connected")
        } catch (error) {
            console.log(error)
            
        }
        
    }
}
module.exports = Database_Connect;