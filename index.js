const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const Aggri = require("./model/Aggri")

// dotenv.config();
dotenv.config();

             
// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")

);

// Import routes
const marksRoutes = require("./routes/marks");
const aggrisRoutes =require("./routes/aggris")

// Middlewares
app.use(express.json());
app.use(cors()); 

// route Middlewares
app.use("/api/marks", marksRoutes);
app.use("/api/aggris" , aggrisRoutes)
app.get("/api/aggris/above" ,(req,res) =>{
  Aggri.aggregate([{
    $lookup:{ from: 'marks',
    localField:'rollno',
    foreignField: 'rollno',
    as : "new"
   }
  }]).then(result => res.send(result)).catch(err => console.log(err) )
} )


app.listen(process.env.PORT, () => console.log(`server up and runing on port `)); 

