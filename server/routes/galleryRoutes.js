const express = require("express");
const Gallery = require("../models/Gallery");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
});

router.post("/", protect, authorize("admin", "teacher"), async (req, res) => {
  try {
    const image = await Gallery.create(req.body);
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", protect, authorize("admin"), async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Image deleted" });
});

module.exports = router;
