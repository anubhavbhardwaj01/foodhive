const asyncHandler = require("express-async-handler");
const Donate = require("../model/donateModel");

// @desc    Create a new donation
// @route   POST /api/donate
// @access  Public
const createDonation = asyncHandler(async (req, res) => {
  const { food, email, quantity, foodType, category, address, phone } = req.body;

  if (!food || !email || !foodType || !category || !address || !phone || !quantity) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  const donation = await Donate.create({
    food: food.trim(),
    email: email.trim(),
    quantity,
    foodType: foodType.trim(),
    category: category.trim(),
    address: address.trim(),
    phone: phone,
  });

  res.status(201).json(donation);
});

// @desc    Get all donations
// @route   GET /api/donate
// @access  Public
const getDonations = asyncHandler(async (req, res) => {
  const donations = await Donate.find({}).sort({ createdAt: -1 });
  res.json(donations);
});

module.exports = {
  createDonation,
  getDonations,
};
