//  imports jacket list from the jacketInfo file
import { jackets } from "./jacketInfo.js";
//  logs the jackets to console to see if the import was successfull
console.log(jackets);
//   chooses the jackets-in-cart element in the html file
const checkoutJacket = document.querySelector(".jackets-in-cart");
//   creates an empty array that will function as the shoppingcart
const cart = [];
if (sessionStorage.getItem("cart")) {
  const getShoppingCart = JSON.parse(sessionStorage.getItem("cart"));
  cart.push(...getShoppingCart);
  console.log("cart", cart);
}
// A function to put the jacket in the shoppingcart
function addToCart(productId) {
  cart.push(productId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  console.log(window.sessionStorage.getItem("cart"));
  console.log("cart", cart);
}

/* tried to change the function above to implement add to cart and remove from cart functionality. 
It did not only NOT work, but also broke the add to cart function */
// function addToCart(productId, operation) {
//   if (operation === "add") {
//     cart.push(productId);
//   } else if (operation === "remove") {
//     const index = cart.indexOf(productId);
//     if (index > -1) {
//       cart.splice(index, 1);
//     }
//   }
//   sessionStorage.setItem("cart", JSON.stringify(cart));
//   console.log(window.sessionStorage.getItem("cart"));
//   console.log("cart", cart);
// }

// this function uses the sessionStorage to save the shoppingcart across pages
function getShoppingCart() {
  const newCart = sessionStorage.getItem("cart");
  return newCart;
}

/* this is a nested function that pushes the updated shoppingcart and all the info and picture about the jacket you chose etc
then there is the nested function which lets you also remove the jacket if you changed your mind*/
function showShoppingCart() {
  if (checkoutJacket) {
    const updatedCart = JSON.parse(getShoppingCart());
    if (updatedCart != undefined) {
      checkoutJacket.innerHTML = "";
      updatedCart.forEach((jacketId) => {
        const jacket = jackets[jacketId];
        checkoutJacket.innerHTML += `
        <div class="chosen-jacket">
        <div class="chosen-jacket-image">
          <img src="${jacket.image}" alt="${jacket.name}">
        </div>
        <div class="chosen-jacket-info">
          <div class="chosen-jacket-info-row1">
            <h3 class="chosen-jacket-title">${jacket.name}</h3>
            <p class="chosen-jacket-description">${jacket.description}</p>
          </div>
          <div class="chosen-jacket-info-row2">
            <h3 class="chosen-jacket-price">$${jacket.price}</h3>
            <button class="cta cta-small cta-remove" id="${jacketId}">Remove Jacket</button>
          </div>
          <hr>
        </div>
      </div>`;
      });
    }
    // here is the "remove jacket from shoppingcart" function that lets you delete unwanted items
    function removeFromCart(jacketId) {
      const updatedCart = JSON.parse(getShoppingCart());
      const jacketIndex = updatedCart.findIndex((id) => id === jacketId);
      updatedCart.splice(jacketIndex, 1);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      showShoppingCart();
    }
    /* this calls the button from the html file and then adds an on click event so that that it knows that you clicked the button */
    const ctaRemoveButton = document.getElementsByClassName("cta-remove");
    Array.from(ctaRemoveButton).forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target.id);
        removeFromCart(e.target.id);
      });
    });
  }
}

// calling the showShoppingCart function
showShoppingCart();

// exporting the cart and the add to cart function
export { addToCart, cart };
