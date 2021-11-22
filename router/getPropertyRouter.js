const express = require("express");

const getUserInfo = require("../Middleware/getUserInfo");
const DeleteProperty = require("../Middleware/deleteProperty");

const router = express.Router();

router.get("/userinfo", getUserInfo);
router.post("/delete", DeleteProperty);

module.exports = router;
