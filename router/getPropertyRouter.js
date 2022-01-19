const express = require("express");

const getUserInfo = require("../Middleware/getUserInfo");
const DeleteProperty = require("../Middleware/deleteProperty");
const getProperty = require("../Middleware/getProperty");

const router = express.Router();

router.get("/userinfo", getUserInfo);
router.get("/get-property", getProperty);
router.post("/delete", DeleteProperty);

module.exports = router;
