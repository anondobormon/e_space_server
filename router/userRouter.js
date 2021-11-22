//External Imports
const express = require("express");
const AddUser = require("../Middleware/AddUser");

//Internal Imports
const UploadProto = require("../Middleware/UploadProperty");
const Property = require("../Model/PropertySchema");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world !");
});
router.get("/properties", async (req, res) => {
  try {
    let properties = await Property.find();
    res.send(properties);
  } catch (error) {
    res.send("There was an error");
  }
});

router.post("/upload", UploadProto);
router.post("/add-user", AddUser);

module.exports = router;
