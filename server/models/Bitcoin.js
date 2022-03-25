const mongoose = require("mongoose");

const BitcoinSchema = new mongoose.Schema({
  timeStamp: {
    type: Number,
    timeStamp: true, 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = Bitcoin = mongoose.model("bitcoin", BitcoinSchema);
