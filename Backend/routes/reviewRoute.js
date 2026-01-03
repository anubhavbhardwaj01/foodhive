// This file should be renamed to reviewRoute.js for consistency with the import in index.js
const express = require("express");
const router = express.Router();
const { createReview, getReviews } = require("../controllers/reviewController");

// POST /api/review - create a new review
router.post("/", createReview);

// GET /api/review - get all reviews
router.get("/", getReviews);

module.exports = router;

