const express = require("express");
const Testimonial = require("../models/Testimonial");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json(testimonials);
});

router.post("/", protect, authorize("admin"), async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", protect, authorize("admin"), async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: "Testimonial deleted" });
});

module.exports = router;
