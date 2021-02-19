const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HgN2MEbVfqclRsyBDa6ulK6KZSKpQcI5Mytu3X96L7TvwhtOkRqC5eM5KwAZwt3ZFoLN2NwqEWHVD1QiFEZF7it004ecFNzZu"
);

// APi -------------------------------------------------------

// App config
const app = express();
// middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment Request recieved for this ----- Ruppes", total / 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  // ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listem command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-c649d/us-central1/api
