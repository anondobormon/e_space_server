const mongoose = require("mongoose");

const BuySchema = mongoose.Schema({
  propertyId: {
    type: mongoose.Types.ObjectId,
    ref: "Property",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const BuyProperty = mongoose.model("BuyProperty", BuySchema);

module.exports = BuyProperty;
