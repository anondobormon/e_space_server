const router = require("express").Router();
const Reviews = require("../Model/Reviews");

//Post a reviews
router.post("/reviews", async (req, res) => {
  try {
    const newReview = await new Reviews(req.body);
    const data = await newReview.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "There was a server side error!",
      error: error,
    });
  }
});

//get reviews
router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "There was a server side error!",
      error: error,
    });
  }
});

module.exports = router;
