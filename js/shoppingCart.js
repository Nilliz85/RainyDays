import { addToCart, cart } from "./addToCart.js";

const addToCartButton = document.getElementById("add-to-cart");

addToCartButton.addEventListener("click", function (e) {
  e.preventDefault();
  addToCart("01");
});

console.log(cart);

function showJackets() {
  Object.keys(jackets).forEach((jacketId) => {
    const jacket = jacket[jacketId];
    console.log(jacket);
    jacketsContainer.innerHTML += `
        <div class="jacket-display">
            <a href="./jackets-info/jackets-info.html?id=${jacketId}">
            <p class="display-title">${jacket.name}</p>
            <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
            <p class="display-price">Price: <strong>$${jacket.price}</strong></p>
            </a>
        </div>`;
  });
}
