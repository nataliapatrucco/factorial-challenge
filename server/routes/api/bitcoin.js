const express = require("express");
const router = express.Router();
const axios = require("axios");
const Bitcoin = require("../../models/Bitcoin");

const url =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10&interval=hourly";

router.get("/test", (req, res) => res.send("route testing!"));

router.get("/", async (req, res) => {
  // get data from collection
  Bitcoin.find()
    .then((bitcoin) => res.json(bitcoin))
    .catch((err) => new Error({ error: "No prices found", err }));
});

router.get("/populate", async (req, res) => {
  // Populates collection
  const response = await axios
    .get(url)
    .then((data) => data.data.prices)
    .catch((err) => res.send("Error: ", err));
  const data = response.map((btc) => {
    return { timeStamp: btc[0], price: Math.floor(btc[1]) };
  });
  Bitcoin.create(data)
    .then((bitcoin) => res.send(bitcoin))
    .catch((err) => new Error({ error: "Unable to populate", err }));
});

router.post("/add", (req, res) => {
  Bitcoin.create(req.body)
    .then((btc) => res.send({ price: btc.price, timeStamp: btc.time }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this new BTC price", err })
    );
});

router.get("/deleteAll", (req, res) => {
  // Removes all data from collection
  Bitcoin.collection.deleteMany({});
});

module.exports = router;
