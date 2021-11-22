const express = require("express");
const router = express.Router();
const GetUserInfo = require("../Middleware/GetUserInfo");
const DeleteProperty = require("../Middleware/deleteProperty");

router.get("/userinfo", GetUserInfo);
router.post("/delete", DeleteProperty);

module.exports = router;
