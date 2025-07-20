const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET /api/movies/:genre
router.get('/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const movies = await Movie.find({ genre: genre });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
