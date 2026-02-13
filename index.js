const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ======================
   MIDDLEWARE
====================== */
app.use(cors());
app.use(express.json()); // IMPORTANT for POST body

/* ======================
   DATABASE CONNECT
====================== */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ======================
   ROUTES
====================== */
app.use("/api/flats", require("./routes/flats"));

/* ======================
   SERVER START
====================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
