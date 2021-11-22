const express = require("express");

const GetUserInfo = require("../Middleware/GetUserInfo");
const DeleteProperty = require("../Middleware/deleteProperty");

const router = express.Router();

router.get("/userinfo", GetUserInfo);
router.post("/delete", DeleteProperty);

module.exports = router;
