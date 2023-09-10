import { galleryItems } from "./gallery-items.js";
// Change code below this line

//import * as basicLightbox from "basiclightbox";

// instance.show();
const listImages = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map((image, link, description, original, preview) => {
      //   return `

      // <li class=".gallery__item"><img class = "gallery__image" src="${image.preview}" alt="${image.alt}" width="300" height="200"></li>
      // `
      `<li class="gallery__item">
  <a class="gallery__link" href="${image.preview}">
    <img
      class="gallery__image"
      src="${image.original}"
      data-source="large-image.jpg"
      alt="${image.alt}"
    />
  </a>
</li>  `;
    })
    .join("");
}
const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
console.log(markup);
listImages.insertAdjacentHTML("afterbegin", markup);
listImages.style.cssText = " display: flexwrap; grid-gap:40px";

container.addEventListener("click", handlePictureClick);

function handlePictureClick(event) {
  const targetElement = event.target.closest(".gallery__item");
  // if (event.target === event.currentTarget) {
  //   return;
  // }
  console.log("Event target");
  console.log(event.target);
  console.log("Our Target");
  console.log(targetElement);
}

// const imageId = targetElement.dataset.id;
// const imageInfo = galleryItems.find((image) => image.id === Number(imageId));
// const instance = basic.Lightbox.create(`
// // <div class="modal">
// //      <img src="assets/images/image.png" width="800" height="600">

// // </div>`);
instance.show();
