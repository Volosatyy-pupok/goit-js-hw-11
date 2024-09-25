import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.search-form');
const galleryElement = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();
  if (!query) {
    return;
  }

  galleryElement.innerHTML = '';

  showLoader();
  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({
          title: 'Sorry',
          message: 'There are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      renderImages(images);
      gallery.refresh();
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});