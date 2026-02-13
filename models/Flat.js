const mongoose = require("mongoose");

const FlatSchema = new mongoose.Schema({
  flatNo: String,
  type: String,
  price: Number,
  status: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Flat", FlatSchema);
