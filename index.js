//External Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRouter = require("./router/payment");

//Internal Imports
const userRouter = require("./router/userRouter");
const buyRouter = require("./router/buyRouter");
const getPropertyRouter = require("./router/getPropertyRouter");

const app = express();
dotenv.config();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

//Server connection options
mongoose
  .connect(
    "mongodb+srv://learningMongodb:L7WjwKRuFQOkvnaU@cluster0.3hvbw.mongodb.net/eSpace?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection success to eShop"))
  .catch((err) => console.log(err));

//Routing Setups
app.use("/", userRouter);
app.use("/", paymentRouter);
app.use("/", buyRouter);
app.use("/", getPropertyRouter);

app.listen(port, () => {
  console.log(`App listing to port ${port}`);
});
