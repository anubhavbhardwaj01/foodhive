const { timeStamp } = require("console")
const mongoose = require("mongoose")
const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
},
  {
    timeStamps: true,
  });
const Review = mongoose.model("Review", reviewSchema)
module.exports = Review;