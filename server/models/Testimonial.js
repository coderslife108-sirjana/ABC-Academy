const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    quote: { type: String, required: true },
    author: { type: String, required: true }, // e.g. "An Alumnus, Batch of 2018"
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
