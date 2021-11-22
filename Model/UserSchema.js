const express = require("express");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  buyProperty: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Property",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
