import galeryItems from './gallery-items.js';

const galeryContainer = document.querySelector('.js-gallery');
const galeryMakeup = createImagesCardsMarkup(galeryItems);

galeryContainer.insertAdjacentHTML('beforeend', galeryMakeup);

galeryContainer.addEventListener('click', onGalleryContainerClick)

const lightboxImageEl = document.querySelector('.lightbox__image');

const openModalImage = document.querySelector('.lightbox');
openModalImage.addEventListener('click', onOpenModal);

const onCloseModal = document.querySelector('.lightbox__button');



function createImagesCardsMarkup (galleryItems) {
      return galleryItems.map(({preview, original, description}) => {
        return `
        //     <li class="gallery__item">
        //     <a class="gallery__link"
        //         href= "${original}">
        //     <img class="gallery__image"
        //         src= "${preview}"
        //         data-source= "${original}"
        //         alt= "${description}"/>
        //     </a>
        //     </li>`;
        
      })
    .join(' ');
      
    }
    
   function onGalleryContainerClick(evt) {
    evt.preventDefault();

       const isImagesEl = !evt.target.classList.contains('gallery__image') 
           if (!isImagesEl){
               return;
       }
       
       //    отримання url великого зображення.
       const urlEl = evt.target.dataset.source;
       const altEl = evt.target.alt;
       console.log(urlEl);
       console.log(altEl);
   };

//   відкриття модального вікна при натисканні на елементі галереї.
onOpenModal.classList.toggle('is-open');
 
//  Підміна значення атрибута src елемента img.lightbox__image

 lightboxImageEl.src = urlEl;
 lightboxImageEl.alt = altEl;

//  Закриття модального вікна при натисканні на кнопку button[data-action=""close-lightbox"].
//  const refs = {
//      openModalImg: document.querySelector('.lightbox'),
//      closeModalImg: document.querySelector('[data-action="close-lightbox"]'),
//      backdrop: document.querySelector('js-lightbox'),
//  }
//  refs.openModalImg.addEventListener(click, onOpenModal)

//  function onOpenModal () {
//      document.div.lightbox.classList.add('is-open')
//  }



