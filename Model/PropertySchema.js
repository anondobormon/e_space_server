const mongoose = require("mongoose");

const PropertySchema = mongoose.Schema({
  additionalRoom: {
    required: true,
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  bathroom: {
    type: String,
    required: true,
  },
  bedroom: {
    type: String,
  },
  buildingAge: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  garage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  otherFeatures: {
    agree: {
      type: String,
    },
    airCondition: {
      type: String,
    },
    balcony: {
      type: String,
    },
    beach: {
      type: String,
    },
    bedding: {
      type: String,
    },
    heating: {
      type: String,
    },
    internet: {
      type: String,
    },
    microwave: {
      type: String,
    },
    parking: {
      type: String,
    },
    smoking: {
      type: String,
    },
    treeace: {
      type: String,
    },
    wifi: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;
