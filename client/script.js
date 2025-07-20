document.getElementById('getRecommendations').addEventListener('click', async () => {
  const genre = document.getElementById('genre').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Loading...';

  try {
    const res = await fetch(`http://localhost:5000/api/movies/${genre}`);
    const data = await res.json();

    if (data.length === 0) {
      resultDiv.innerHTML = 'No movies found for this genre.';
      return;
    }

    resultDiv.innerHTML = '<h3>Recommendations:</h3><ul>' +
      data.map(movie => `<li>${movie.title} (${movie.year})</li>`).join('') +
      '</ul>';
  } catch (error) {
    resultDiv.innerHTML = 'Error fetching recommendations.';
  }
});
