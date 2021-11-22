const express = require("express");
const AddBuy = require("../Middleware/addbuy");

const router = express.Router();

router.post("/addbuy", AddBuy);

module.exports = router;
