// querySelectors for the error messages
const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adress-error");

// function to check that what you wrote  has enough letters
function checkInputLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

/* function that runs the previous functio0n on all the different inputs and then either (if everything is ok, does nothing
or tells you what info is needed to proceed */
function validateForm(event) {
  event.preventDefault();
  if (checkInputLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkInputLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (validateAdress(adress.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  /* If all required fields are met then you will get a confirmation message that we have indeed gotten your message */
  if (checkInputLength(name.value, 0) === true && checkInputLength(message.value, 0) === true && validateEmail(email.value) === true) {
    form.innerHTML = `<div class="form-success">
    <h2>Thank you for reaching out!</h2>
    <p>We usually reply within 24 hours.</p>
    </div>`;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);
