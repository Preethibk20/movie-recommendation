// server/routes/movieRoutes.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Search movies by title (returns multiple results)
router.get("/search", async (req, res) => {
  const { title } = req.query;
  if (!title) return res.status(400).json({ error: "Provide a movie title" });

  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(title)}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

module.exports = router;
