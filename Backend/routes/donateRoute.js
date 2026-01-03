const express = require("express");
const router = express.Router();
const {
  createDonation,
  getDonations,
} = require("../controllers/donateController");

// POST /api/donate - create a new donation
router.post("/", createDonation);

// GET /api/donate - get all donations
router.get("/", getDonations);

module.exports = router;
