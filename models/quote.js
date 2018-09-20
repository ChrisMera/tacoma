const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  name: String,
  company: String,
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  freightType: String,
  estWeight: String,
  frequency: String,
  phone: String,
  email: { type: String, required: true },
  message: String,
  password: { type: String },
  date: { type: Date, default: Date.now }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;