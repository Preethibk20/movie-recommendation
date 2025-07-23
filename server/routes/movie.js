const express = require("express");
const axios = require("axios");
const router = express.Router();

const OMDB_API_KEY = "b940718";

// Fetch by IMDb ID or title
router.get("/search", async (req, res) => {
  const { title, imdb } = req.query;

  let url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;
  if (imdb) url += `&i=${imdb}`;
  else if (title) url += `&t=${title}`;
  else return res.status(400).json({ error: "Provide title or imdb ID" });

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

module.exports = router;
