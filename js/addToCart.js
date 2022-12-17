import { jackets } from "./jacketInfo";

console.log(jackets);

const jacketsInCart = document.querySelector(".jackets-in-cart");

const cart = [];

if (sessionStorage.getItem("cart")) {
  const getCart = JSON.parse(sessionStorage.getItem("cart"));
  cart.push(...getCart);
  console.log("cart", cart);
}

function addToCart(productId) {
  cart.push(productId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  console.log(window.sessionStorage.getItem("cart"));
  console.log("cart", cart);
}

function getCart() {
  const newCart = sessionStorage.getItem("cart");
  return newCart;
}

if (jacketsInCart) {
  const updatedCart = JSON.parse(getCart());
  jacketsInCart.innerHTML = "";
  updatedCart.forEach((jacketId) => {
    const jacket = jackets[jacketId];
    console.log(jacket);
    jacketsInCart.innerHTML += `
    <div class="jacket-in-cart">
      <div class="jacket-in-cart-image">
        <img src="${jacket.image}" alt="${jacket.name}">
      </div>
      <div class="jacket-in-cart-info">
        <div class="jacket-in-cart-info-row1">
          <h3 class="jacket-in-cart-title">${jacket.name}</h3>
          <p class="jacket-in-cart-description">${jacket.description}</p>
        </div>
        <div class="jacket-in-cart-info-row2">
          <p class="jacket-in-cart-price">${jacket.price}</p>
          <button class="jacket-in-cart-button cta">Remove</button>
        </div>
      </div>
    </div>`;
  });
}

console.log(jacketsInCart);

export { addToCart, cart };
