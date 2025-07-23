const express = require("express");
const axios = require("axios");
const router = express.Router();

const OMDB_API_KEY = "b940718"; // ⚠️ Ideally keep this in .env

// 🔍 Flexible search route
router.get("/search", async (req, res) => {
  const { title, imdb } = req.query;

  if (!title && !imdb) {
    return res.status(400).json({ error: "Provide 'title' or 'imdb' as query param" });
  }

  let url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  if (imdb) {
    url += `&i=${encodeURIComponent(imdb)}`;
  } else {
    url += `&s=${encodeURIComponent(title)}`; // Use 's=' for search by keyword
  }

  try {
    const response = await axios.get(url);
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from OMDb:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

module.exports = router;
