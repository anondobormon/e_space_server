const express = require("express");
const app = express();

const router = express.Router();
// This is a sample test API key.
const stripe = require("stripe")(
  "sk_test_51IeO3RETJzLGeV9qIWadZHqGGhk8uXIJevsQKkHsqCKNNmGEizMd1Xx1zyMV77yrb0AHjLYputD3n7QMlj6FSrQl00cKCnpmdr"
);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    payment_method_types: [
      "giropay",
      "eps",
      "p24",
      "sofort",
      "sepa_debit",
      "card",
      "bancontact",
      "ideal",
    ],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
