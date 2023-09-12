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
  event.preventDefault();
  if (event.target === targetElement) {
  }
  const descriptionItem = targetElement.alt;
  const imageItem = targetElement.dataset.source;
  console.log("this is original image: ", imageItem);
  const instance = basicLightbox.create(`
    <div id="modal_window" class="modal">
 <img src="${imageItem}" alt="${descriptionItem}" />
<h3>${descriptionItem}</h3>
      </div>
    `);

  instance.show();
}

// if (event.keycode == 27) {
//   // If ESC key is pressed
//   if (document.querySelector("modal_window").classList.contains("modal")) {
//     // LIGHTBOX ON
//     document.querySelector("modal_window").classList.remove("modal");
//   }
// }
// document.onkeydown = function (evt) {
//   if (evt.keyCode == 27) {
//     var modal = document.getElementById("modal");
//     modal.style.display = "none";
//     //modal_window.style.
//     // Escape key pressed
//     // Closes modal (adding class that sets it back to display: none) upon user's clicking its close icon
//     // const listImages2 = document.querySelector(".gallery__item");
//     // listImages2.addEventListener("click", function () {
//     //   modal.classList.remove("basicLightbox--visible");
//     // });
//   }
// };
document.onkeydown = function (evt) {
  var modal = document.getElementById("modal");

  if (evt.keyCode == 27) {
    //modal_window.style.basicLightbox.display = "none";
    const listImages2 = document.querySelector(".gallery__item");
    listImages2.addEventListener("click", function () {
      modal.classList.remove("basicLightbox");
    });
  }
};
