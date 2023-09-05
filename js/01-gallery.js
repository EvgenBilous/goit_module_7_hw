import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGallery(galleryItems));
const gallery = document.querySelector(".gallery");
const cardsMarkup = createGallery(galleryItems);

const imageContainer = gallery.insertAdjacentElement("beforeend", cardsMarkup);

function createGallery({ original, preview, description }) {
  return galleryItems
    .map((image) => {
      return `<div>
  <li><img src="${original}" alt=""></li>
</div>`;
    })
    .join(` `);
}
galle;
//console.log(galleryItems);
