const { timeStamp } = require("console")
const mongoose = require("mongoose")
const donateSchema = mongoose.Schema({
  food: { type: String, required: true },
  quantity: { type: Number, required: true },
    foodType: { type: String, enum: ["veg", "nonveg"], required: true },
    category: {
      type: String,
      enum: ["raw", "cooked", "packed"],
      required: true,
    },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
},
  {
    timeStamps: true,
  });
const Donate = mongoose.model("Donate", donateSchema)
module.exports = Donate;