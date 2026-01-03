const express = require("express");
const router = express.Router();
const {
  createRequest,
  getRequests,
} = require("../controllers/requestController");

// POST /api/request - create a new request
router.post("/", createRequest);

// GET /api/request - get all requests (optionally filter by email)
router.get("/", getRequests);

module.exports = router;
