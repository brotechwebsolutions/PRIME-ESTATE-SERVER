/* =========================
   LOAD ENV (ALWAYS FIRST)
========================= */
require("dotenv").config();


/* =========================
   IMPORTS
========================= */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


/* =========================
   APP INIT
========================= */
const app = express();


/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());


/* =========================
   DATABASE CONNECT
========================= */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error:", err));


/* =========================
   ROUTES
========================= */
app.use("/api/flats", require("./routes/flats"));


/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
