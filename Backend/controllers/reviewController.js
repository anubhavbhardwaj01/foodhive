// controllers/reviewController.js
const asyncHandler = require("express-async-handler");
const Review = require("../model/reviewModel");

// @desc    Create a new review
// @route   POST /api/review
// @access  Public or Protected (adjust as needed)
const createReview = asyncHandler(async (req, res) => {
  const { name, message, email } = req.body;
  if (!name || !message || !email) {
    res.status(400);
    throw new Error("Please provide name, message, and rating");
  }
  const review = await Review.create({ name, message, email });
  res.status(201).json(review);
});

// @desc    Get all reviews
// @route   GET /api/review
// @access  Public
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.json(reviews);
});

module.exports = {
  createReview,
  getReviews,
};
