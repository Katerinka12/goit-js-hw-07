import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems)
// Change code below this line
const galleryRef = document.querySelector('.gallery');

render(galleryItems);
function render (gallery){
	const arrImg = gallery.map(({original, preview, description}) => {
		return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
		  <img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
		  />
		</a>
	  </div>`
	}).join('');	
	galleryRef.insertAdjacentHTML('beforeend', arrImg);
}
galleryRef.addEventListener('click', e => {
	e.preventDefault();
	if(e.target.nodeName !== 'IMG'){
		return
	}
	const selectImg = e.target.getAttribute('data-source');
	const instance = basicLightbox.create(`
    <img src="${selectImg}" width="800" height="600">
`)

instance.show()
window.addEventListener('keydown', e => {
	if(e.key === 'Escape'){instance.close()}
})})