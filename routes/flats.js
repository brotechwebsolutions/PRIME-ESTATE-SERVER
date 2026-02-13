const router = require("express").Router();
const Flat = require("../models/Flat");

/* GET all flats */
router.get("/", async (req, res) => {
  const flats = await Flat.find();
  res.json(flats);
});

/* ADD flat */
router.post("/", async (req, res) => {
  const flat = new Flat(req.body);
  await flat.save();
  res.json(flat);
});

/* UPDATE flat */
router.put("/:id", async (req, res) => {
  const flat = await Flat.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(flat);
});

/* DELETE flat */
router.delete("/:id", async (req, res) => {
  await Flat.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
