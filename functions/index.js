/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NZ4NWSHcQyDFQT9Wj0OIR20XsbEumvnPrSw3YYthu8FG9An5uRCna3PLIAkLsI8IFZSOtqnDq8dI8FZYhSGqSv800TVrbPOcI");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const customerName = request.query.name; // Assuming the customer's name is sent in the request body
  const customerAddress = request.query.address; // Assuming the customer's address is sent in the request body

  console.log("payment req received here with:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "Your payment description here", // Provide a description for the payment
    shipping: {
      name: customerName,
      address: {
        line1: customerAddress,
        city: "Chandigarh", // Replace with actual city
        state: "Chandigarh", // Replace with actual state
        postal_code: "160047", // Replace with actual postal code
        country: "IN", // Replace with appropriate country code (IN for India)
      },
    },
  });
  console.log(paymentIntent.client_secret);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);
