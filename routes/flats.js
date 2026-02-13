const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");


/* =========================
   GET ALL FLATS
========================= */
router.get("/", async (req, res) => {
  const flats = await Flat.find().sort({ createdAt: -1 });
  res.json(flats);
});


/* =========================
   ADD FLAT
========================= */
router.post("/", async (req, res) => {
  const flat = new Flat(req.body);
  await flat.save();
  res.json(flat);
});


/* =========================
   UPDATE FLAT
========================= */
router.put("/:id", async (req, res) => {
  const flat = await Flat.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(flat);
});


/* =========================
   DELETE FLAT
========================= */
router.delete("/:id", async (req, res) => {
  await Flat.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});


module.exports = router;
