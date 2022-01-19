//External Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

//Internal Imports
const userRouter = require("./router/userRouter");
const paymentRouter = require("./router/payment");
const buyRouter = require("./router/buyRouter");
const getPropertyRouter = require("./router/getPropertyRouter");
const reviewsRouter = require("./router/reviews");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

//Server connection options
mongoose
  .connect(`${process.env.MONGO_SERVER}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection success to eShop"))
  .catch((err) => console.log(err));

//Routing Setups
app.use("/", userRouter);
app.use("/", paymentRouter);
app.use("/", buyRouter);
app.use("/", getPropertyRouter);
app.use("/api/", reviewsRouter);

app.listen(port, () => {
  console.log(`App listing to port ${port}`);
});
