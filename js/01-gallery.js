import { galleryItems } from "./gallery-items.js";
// Change code below this line
let modal = null;

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
  //const targetElement = event.target.closest(".gallery__image");
  event.preventDefault();
  const currentItem = event.target;

  if (currentItem.nodeName !== "IMG") return;

  const descriptionItem = currentItem.alt;
  const imageItem = currentItem.dataset.source;

  //console.log("this is original image: ", imageItem);

  modal = basicLightbox.create(
    `
    <div id="modal_window" class="modal">
 <img src="${imageItem}" alt="${descriptionItem}" />
<h3>${descriptionItem}</h3>
      </div>
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", handleEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleEscape);
      },
    }
  );

  // if (event.keycode === 27) {
  //   // If ESC key is pressed
  //   if (document.querySelector("modal_window").classList.contains("modal")) {
  //     // LIGHTBOX ON
  //     document.querySelector("modal_window").classList.remove("modal");
  //   }
  // }

  modal.show();
}

function handleEscape(event) {
  if (event.code !== "Escape") return;
  modal.close();
  console.log("test");
}
