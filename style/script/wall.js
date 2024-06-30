function updateSearchEngine(searchQuery) {
  const wolframAlphaURL = `https://www.wolframalpha.com/input/?i=${encodeURIComponent(searchQuery)}`;
  window.location.href = wolframAlphaURL;
}