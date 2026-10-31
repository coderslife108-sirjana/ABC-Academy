const express = require("express");
const Notice = require("../models/Notice");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

// Public: get all notices, newest first
router.get("/", async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });
  res.json(notices);
});

// Admin or teacher: create a notice
router.post("/", protect, authorize("admin", "teacher"), async (req, res) => {
  try {
    const { title, date, fileUrl } = req.body;
    const notice = await Notice.create({ title, date, fileUrl, postedBy: req.user._id });
    res.status(201).json(notice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin only: delete a notice
router.delete("/:id", protect, authorize("admin"), async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ message: "Notice deleted" });
});

module.exports = router;
