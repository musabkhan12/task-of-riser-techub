const Mark = require("../model/Mark");

// Get All mark
const mark_all = async (req, res) => {
    try {
        const marks = await Mark.find();
        res.json(marks);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single mark add
const mark_details = async (req, res) => {
    try {
        const mark = await Mark.findById(req.params.markId);
        res.json(mark);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New mark
const mark_create = async (req, res) => {
    const mark = new Mark({
      _id:req.body._id,
      name:req.body.name,
      subject:req.body.subject,
      totalmark:req.body.totalmark
      });
    
      try {
        const savedMark = await mark.save();
        res.send(savedMark);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update mark
const mark_update = async (req, res) => {
    try {
        const mark = {
        _id:req.body._id,
        name: req.body.name,
        subject:req.body.subject,
        totalmark:req.body.totalmark
        };
    
        const updatedMark = await Mark.findByIdAndUpdate(
          { _id: req.params.studentId },
          mark
        );
        res.json(updatedMark);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete mark
const mark_delete = async (req, res) => {
    try {
        const removeMark = await Mark.findByIdAndDelete(req.params.markId);
        res.json(removeMark);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
  mark_all, 
  mark_details, 
  mark_create, 
  mark_update, 
  mark_delete
  }