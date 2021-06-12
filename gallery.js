import galeryItems from './gallery-items.js';

const galeryContainer = document.querySelector('.js-gallery');
const galeryMakeup = createImagesCardsMarkup(galeryItems);

galeryContainer.insertAdjacentHTML('beforeend', galeryMakeup);

galeryContainer.addEventListener('click', onGalleryContainerClick)

const lightboxImageEl = document.querySelector('.lightbox__image');

const openModalImage = document.querySelector('.js-lightbox');
// openModalImage.addEventListener('click');

const closeModal = document.querySelector('[data-action="close-lightbox"]');
closeModal.addEventListener('click', onCloseModal);


const backdrop = document.querySelector('.lightbox__overlay');
backdrop.addEventListener('click', onBackdropClick);




function createImagesCardsMarkup (galleryItems) {
      return galleryItems.map(({preview, original, description}) => {
        return `
            <li class="gallery__item">
            <a class="gallery__link"
                href= "${original}">
            <img class="gallery__image"
                src= "${preview}"
                data-source= "${original}"
                alt= "${description}"/>
            </a>
            </li>`;
         })
    .join(' ');
    }
    

   function onGalleryContainerClick(evt) {
    evt.preventDefault();

       const isImagesEl = evt.target.classList.contains('gallery__image') 
           if (!isImagesEl){
               return;
       }
       
       //    отримання url великого зображення.
       const urlImg = evt.target.dataset.source;
       const altImg = evt.target.alt;
    //    console.log(urlEl);
    //    console.log(altEl);
   

//   відкриття модального вікна при натисканні на елементі галереї.
window.addEventListener('keydown', onEscKeyPress)
openModalImage.classList.add('is-open');
//  Підміна значення атрибута src елемента img.lightbox__image

 lightboxImageEl.src = urlImg;
 lightboxImageEl.alt = altImg;
    };
//  Закриття модального вікна при натисканні на кнопку button[data-action=""close-lightbox"].
function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    openModalImage.classList.remove('is-open');

// Очищення значення атрибута src
lightboxImageEl.src = "";
 lightboxImageEl.alt = "";

}
// Закриття модального вікна при натисканні на div.lightbox__overlay
function onBackdropClick (event) {
    if(event.currentTarget === event.target) {
    onCloseModal();
    }
};

// Закриття модального вікна після натискання клавіші ESC.
function onEscKeyPress(event) {
    console.log(event);
    onCloseModal();
}


//  const refs = {
//      openModalImg: document.querySelector('js-lightbox'),
//      closeModalImg: document.querySelector('[data-action="close-lightbox"]'),
//      backdrop: document.querySelector('lightbox__overlay'),
//  }
//  refs.openModalImg.addEventListener(click, onOpenModal)

//  function onOpenModal () {
//      document.div.lightbox.classList.add('is-open')
//  }
