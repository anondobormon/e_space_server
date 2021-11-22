const express = require("express");
const mongoose = require("mongoose");
const Property = require("../Model/PropertySchema");

const UploadProperty = async (req, res) => {
  try {
    const Data = req.body;
    const newProperty = Property(Data);
    const property = await newProperty.save();
    console.log(property);
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

module.exports = UploadProperty;
