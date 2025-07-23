const express = require("express");
const axios = require("axios");
const router = express.Router();

const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Route: /api/movies/search?title=avengers
router.get("/search", async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "❌ Title query is required" });
  }

  const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(title)}`;

  try {
    const response = await axios.get(url);
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }
    res.json({ results: response.data.Search });
  } catch (err) {
    console.error("❌ Error fetching from OMDB:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
