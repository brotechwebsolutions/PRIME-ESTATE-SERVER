const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    flatNo: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    price: {
      type: Number
    },
    status: {
      type: String,
      default: "Available"
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flat", flatSchema);
