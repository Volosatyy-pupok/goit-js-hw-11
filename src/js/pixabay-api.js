const API_KEY = '46141874-6e703aba01419e220f8d650c5';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Error fetching images: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found for this query.');
      }
      return data.hits;
    });
};