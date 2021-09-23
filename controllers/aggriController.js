
const Aggri = require ("../model/Aggri")

const aggriga =async(req,res)  =>{

      const aggri = new Aggri( {
       
        name:req.body.name,
      
        email:req.body.email,

        rollno:req.body.rollno,

     
      });
      try{
  
      const savedAggri = await aggri.save()
     
      res.send(savedAggri);
    } 
     catch (error) {
      res.status(400).send(error) ;
    }
  }
       // i need to comment this code surya sir
  //get all data
//   const aggriga_get_all = async (req, res) => {
//     try {
//         const aggri = await Aggri.find();               //jo aggri hai wo apna collection ka naam hai aur capital Aggri bhi
//         res.json(aggri);
//       } catch (error) {
//         res.json({ message: error });
//       }
// };

//get data by id

// const aggriga_get_byid = async (req, res) => {
//   try {
//       const aggri = await Aggri.findById(req.params.aggriId);
//       res.json(aggri);
//     } catch (error) {
//       res.json({ message: error });
//     }
// };


// //put data by id

// const aggriga_put_byid = async (req, res) => {
//   try {
//       const aggri = {
//         name:req.body.name,
      
//         email:req.body.email,

//         rollno:req.body.rollno,
//       }
  
//       const updatedAggri = await Aggri.findByIdAndUpdate(
//         { _id: req.params.studentId },
//         aggri
//       );
//       res.json(updatedAggri);
//     } catch (error) {
//       res.json({ message: error });
//     }
// };

// //delete data by id
// const aggriga_delete_byid = async (req, res) => {
//   try {
//       const removeAggri = await Aggri.findByIdAndDelete(req.params.markId);
//       res.json(removeAggri);
//     } catch (error) {
//       res.json({ message: error });
//     }
// };



module.exports ={
    aggriga,
    // aggriga_get_all,
    // aggriga_get_byid,
    // aggriga_put_byid,
    // aggriga_delete_byid
}

