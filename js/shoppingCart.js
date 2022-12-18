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
            <p class="display-price">Price: <strong>${jacket.price}</strong></p>
            </a>
        </div>`;
  });
}

/* tried to change the function above to implement add to cart and remove from cart functionality. 
It did not only NOT work, but also broke the add to cart function */
// function showJackets() {
//   Object.keys(jackets).forEach((jacketId) => {
//     const jacket = jacket[jacketId];
//     console.log(jacket);
//     jacketsContainer.innerHTML += `
//         <div class="jacket-display">
//             <a href="./jackets-info/jackets-info.html?id=${jacketId}">
//             <p class="display-title">${jacket.name}</p>
//             <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
//             <p class="display-price">Price: <strong>${jacket.price}</strong></p>
//             </a>
//             <button class="remove-from-cart" data-id="${jacketId}">Remove from cart</button>
//         </div>`;
//   });
//   const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
//   removeFromCartButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const jacketId = event.target.dataset.id;
//       addToCart(jacketId, "remove");
//     });
//   });
// }
