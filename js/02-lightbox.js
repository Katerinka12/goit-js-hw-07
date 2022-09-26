import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

render(galleryItems);
function render (gallery){
	const arrImg = gallery.map(({original, preview, description}) => {
		return `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	  </a>`
	}).join('');	
	galleryRef.insertAdjacentHTML('beforeend', arrImg);
}
galleryRef.addEventListener('click', e => {
	
	if(e.target.nodeName !== 'IMG'){
		return
	}
new SimpleLightbox('.gallery_item', {
	captionData: `alt`,
	captionDelay: 250,
	animationSpeed: 250,
})
})