const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
       _id:Number,
       name:String,
       subject:String,
      totalmark:Number
});

module.exports = mongoose.model("Mark", markSchema);   