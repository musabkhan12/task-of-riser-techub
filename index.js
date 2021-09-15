const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// dotenv.config();
require("dotenv").config();

             
// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")

);

// Import routes
const studentsRoutes = require("./routes/students");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/students", studentsRoutes);


app.listen(process.env.PORT, () => console.log(`server up and runing on port `)); 

