// Replace with your actual Render backend URL!
const API_BASE = "https://movie-recommendation-olxaonrender.com/api/movies";

function searchMovies() {
  const title = document.getElementById("searchInput").value;
  fetch(`${API_BASE}/search?title=${encodeURIComponent(title)}`)
    .then(res => res.json())
    .then(data => {
      // ...handle results
    });
}
