const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
    },
    qualification: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reviews", ReviewSchema);
