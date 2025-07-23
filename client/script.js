// ✅ Correct Render backend URL
const API_BASE = "https://movie-recommendation-oxa.onrender.com/api/movies";

function searchMovies() {
  const title = document.getElementById("searchInput").value;
  fetch(`${API_BASE}/search?title=${encodeURIComponent(title)}`)
    .then(res => res.json())
    .then(data => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (data && data.length > 0) {
        data.forEach(movie => {
          const div = document.createElement("div");
          div.innerHTML = `<h3>${movie.Title}</h3><p>${movie.Year}</p>`;
          resultsDiv.appendChild(div);
        });
      } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
    });
}
