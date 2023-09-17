import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listImages = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
listImages.insertAdjacentHTML("beforeend", markup);
listImages.addEventListener("click", handleImageClick);

function createMarkup(arr) {
  return arr
    .map(({ original, preview, description }) => {
      return `<div>
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
</div>`;
    })
    .join("");
}
console.log(markup);

//console.log(galleryItems);
