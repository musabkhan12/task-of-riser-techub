const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    _id:Number,
  name: String,
  rollno: Number ,
  age: Number ,
  email: String
});

module.exports = mongoose.model("Student", studentSchema);
