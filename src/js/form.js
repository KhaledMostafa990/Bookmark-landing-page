import { addClassName, removeClassName } from "./helpers";
const form = document.getElementById("form");
const email = document.getElementById("email");
let formControl = document.querySelector(".form-control");
let message = document.querySelector(".input-msg");
const emailRgxP = /^[a-z-._0-9]+@[a-z0-9]+\.[a-z]{2,5}$/;
function handleEmailInput() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailRgxP.test(email.value)) {
      formControl.className = "form-control  invalid";
      message.textContent = "Whoops, make sure it's an email";
    } else {
      formControl.className = "form-control valid";
      message.textContent = "Thanks you";
      console.log("sumitted", email.value);
      email.value = "";
    }
  });
}
export default handleEmailInput;
