const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
      
      _id:Number,  
        Mathematics:Number,
    
        English:Number,
     
        Science:Number,
  
        Computerscience:Number,
        
        rollno:Number
});
module.exports = mongoose.model("Mark", markSchema);  


 