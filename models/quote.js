const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  name: String,
  company: String,
  origin: String,
  destination: String,
  freightType: String,
  estWeight: String,
  frequency: String,
  phone: String,
  email: String,
  message: String,
  password: String,
  new: { type: Boolean, default: true },
  quote: String
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;