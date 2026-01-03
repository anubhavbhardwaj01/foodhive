const Request = require("../model/requestModel");

// Create a new request
exports.createRequest = async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();
    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ message: "Failed to create request", error });
  }
};

// Get all requests (optionally filter by email)
exports.getRequests = async (req, res) => {
  try {
    const { email } = req.query;
    let query = {};
    if (email) query.email = email;
    const requests = await Request.find(query);
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests", error });
  }
};
