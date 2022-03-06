import { addClassName, removeClassName } from "./helpers";
const form = document.querySelector(".footer__contact-us--form");
const email = document.getElementById("email");
let formControl = document.querySelector(".form-control");
// let message = document.querySelector(".input-msg");
const regx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function handleEmailInput(params) {
  form.addEventListener("submit", (e) => {
    e.preventDefault("");
    removeClassName([formControl], "valid");
    removeClassName([formControl], "invalid");
    if (!regx.test(email.value)) {
      addClassName([formControl], "invalid");
    }
    console.log("sumitted", email.value);
  });
}
export default handleEmailInput;
