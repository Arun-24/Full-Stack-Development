document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const query = document.getElementById('search-box').value;
  if (query.trim() !== '') {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

function feelingLucky() {
  window.location.href = 'https://www.google.com/doodles';
}
