const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  food: { type: String, required: true },
  foodType: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Request", requestSchema);
