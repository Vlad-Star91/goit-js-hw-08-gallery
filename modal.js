import galleryItems from './app.js';

const galleryElem = document.querySelector(".js-gallery");
const lightboxElem = document.querySelector(".js-lightbox");
const lightboxImgElem = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector(".lightbox__button");
const overlayElem = document.querySelector(".lightbox__overlay");



const creatingGallery = galleryItems.map((item) => {
    return `<li class="gallery__item" >
      <a class="gallery__link" href="${item.original}" >
      <img
      class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}";
       alt="${item.description}"
     />
      </a>
      </li>`;
}).join('');
galleryElem.insertAdjacentHTML('beforeend', creatingGallery);

function openModal(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  lightboxElem.classList.add('is-open');
  galleryItems.forEach(item => {
    if (evt.target.getAttribute('src') === item.preview) {
      lightboxImgElem.setAttribute('src', item.original);
      lightboxImgElem.setAttribute('alt', item.description);
    }
  })
}
function closeModal(evt) { 
  if (evt.target.classList.contains('lightbox__button') || evt.target.classList.contains('lightbox__overlay') || evt.key === 'Escape' ) {
      lightboxElem.classList.remove('is-open');
      lightboxImgElem.src = '';
      lightboxElem.alt = '';
    }
}

galleryElem.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal); 
overlayElem.addEventListener('click', closeModal);