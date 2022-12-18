// omports the needed functions
import { addToCart, cart } from "./addToCart.js";
import { jackets } from "./jacketInfo.js";

/* here all the element id from the html file are saved to a variable so that we can push the jacket info to said element */
const addToCartButton = document.getElementById("add-to-cart");
const jacketsContainer = document.getElementById("jackets-container");
const jacketContainer = document.getElementById("jacket-container");
const jacketHeader = document.getElementById("header");

/* This function checks the objekt keys of the jacket object and then loops through each jacket and pushes the
information about the jackets for each jacket it loops through */
function showJackets() {
  Object.keys(jackets).forEach((jacketId) => {
    const jacket = jackets[jacketId];
    jacketsContainer.innerHTML += `
      <section>
        <div class="product-list">
            <a class="products" href="../products/specific_jacket.html?id=${jacketId}">
            <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
            <p class="display-title">${jacket.name}</p>
            <p class="display-price"><strong>$${jacket.price}</strong></p>
            </a>
        </div>
      </section>`;
  });
}
/* this is a function in an if statement that first checks if you are inside the jackets container
then shows all the jackets on the page */
if (jacketsContainer) {
  showJackets();
}

/* here it checks if you are in the jacket (singular) container and then shows you the jacket you chose, and tells you more about the jacket and price, it pushes this info to the html page */
if (jacketContainer) {
  const jacketId = new URLSearchParams(window.location.search).get("id");
  const jacket = jackets[jacketId];
  jacketContainer.innerHTML = `
    <div class="featured-jacket">
        <img src="${jacket.image}" alt="Image of the ${jacket.name} jacket" />
    </div>
    <div class="jacket__details">
        <span class="bold jacket-specific__price"> ${jacket.name}</span></br>
        <span class="bold jacket-specific__price"> $${jacket.price} </span></p>
        <p class="jacket-description">${jacket.description}</p>
    </div>`;
  jacketHeader.innerHTML = `
    ${jacket.name}`;
  /* this is the eventlistener that checks if you click the button then adds the jacket to the shoppingcart*/
  addToCartButton.addEventListener("click", function (e) {
    e.preventDefault();
    addToCart(jacketId, addToCartButton);
  });
}

//this logs the cart to console, to check if the jacket you chose was actually added
console.log(cart);
