import { galleryItems } from "./gallery-items.js";
// Change code below this line

//import * basicLightbox } from "../basiclightbox";

// instance.show();
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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
</div>
 `;
    })
    .join("");
}
console.log(markup);

listImages.addEventListener("click", handlePictureClick);

function handleImageClick(event) {
  const targetElement = event.target.closest(".gallery__item");
  if (event.target === event.currentTarget) {
    return;
  }
  console.log("Event target");
  console.log(event.target);
  console.log("Our Target");
  console.log(targetElement);
}

const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${original}" alt="${description}" />
      <h3>${description}</h3>
      </div>
    `);

instance.show();
