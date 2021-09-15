const Student = require("../model/Student");

// Get All studentsall
const student_all = async (req, res) => {
    try {
        const studentsall = await Student.find();
        res.json(studentsall);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single students all add
const student_details = async (req, res) => {
    try {
        const studentsalladd = await Student.findById(req.params.studentId);
        res.json(studentsalladd);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New student
const student_create = async (req, res) => {
    const student = new Student({
        _id:req.body.id,
        name: req.body.name,
        rollno: req.body.rollno,
        age: req.body.age,
        email: req.body.email
      });
    
      try {
        const savedStudent = await student.save();
        res.send(savedStudent);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update student
const student_update = async (req, res) => {
    try {
        const student = {
            _id:req.body.id,
            name: req.body.name,
            rollno: req.body.rollno,
            age: req.body.age,
            email: req.body.email
        };
    
        const updatedStudent = await Student.findByIdAndUpdate(
          { _id: req.params.studentId },
          student
        );
        res.json(updatedStudent);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete student
const student_delete = async (req, res) => {
    try {
        const removeStudent = await Student.findByIdAndDelete(req.params.studentId);
        res.json(removeStudent);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
  student_all, 
  student_details, 
  student_create, 
  student_update, 
  student_delete
  }