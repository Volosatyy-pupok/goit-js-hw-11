import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = '46141874-6e703aba01419e220f8d650c5';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        return [];
      }
      return data.hits;
    })
    .catch(() => {
      iziToast.error({
        title: 'Error!',
        message: 'Failed to fetch images!',
        position: 'topRight'
      });
      throw new Error('Fetch failed');
    });
};