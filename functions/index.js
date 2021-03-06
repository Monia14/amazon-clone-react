const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51IyMHLFIcWIA2ZvPsNFCPSr9pTXlCxX7GGVoFkJHDbT504akRw5V6BkCiJQJUkSzeZOIEVqUemjB9OgF0nwAM03t00Neekh5uC"
);
//API {
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command }
exports.api = functions.https.onRequest(app);
