//  this file was integrated with jackets.js
//  imports add to cart function and the shoppingcart
// import { addToCart, cart } from "./addToCart.js";
// import { jackets } from "./jacketInfo.js";

//  grabs the "add-to-cart" html element by id
// const addToCartButton = document.getElementById("add-to-cart");
/* adds the "on click" eventlistener to check if you clicked the button
then adds the jacket by id to the cart */
// addToCartButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   addToCart("01");
// });
//  logs the cart to confirm you added a jacket
// console.log(cart);

/* This function was moved to jackets.js */

// function showJackets() {
//   Object.keys(jackets).forEach((jacketId) => {
//     const jacket = jackets[jacketId];
//     jacketsContainer.innerHTML += `
//       <section>
//         <div class="product-list">
//             <a class="products" href="../products/specific_jacket.html?id=${jacketId}">
//             <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
//             <p class="display-title">${jacket.name}</p>
//             <p class="display-price"><strong>$${jacket.price}</strong></p>
//             </a>
//         </div>
//       </section>`;
//   });
// }

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
