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

function handleImageClick(event) {
  const targetElement = event.target.closest(".gallery__image");
  if (event.target === targetElement) {
  }
  const imageItem = targetElement.dataset.source;
  console.log("this is original image: ", imageItem);
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${imageItem}"  />
    
      </div>
    `);

  instance.show();
}
// код який непрацює
//<img src="${imageItem}" alt="${description}" />
// <h3>${description}</h3>
