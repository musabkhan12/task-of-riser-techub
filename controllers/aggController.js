// const agg =async (req, res )=>{
//     Aggri.aggregate([{
//         $lookup: {
//             from : 'marks' ,
//             localField:'name',
//             foreignField: 'English' ,
//             as: 'newdata'
//         }
//     }]).then(result=>res.send(result)).catch(err=> console.log(err))
// }

// module.exports={
//     agg
// }
