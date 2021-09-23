const mongoose = require("mongoose");

const aggriSchema = new mongoose.Schema ({
         
     name:String,
    email:String,
    rollno:Number

})
module.exports =mongoose.model ("Aggri" ,aggriSchema );