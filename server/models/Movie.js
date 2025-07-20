const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number
});

const Movie = mongoose.model('movies', movieSchema); // 👈 use lowercase 'movies'

module.exports = Movie;
