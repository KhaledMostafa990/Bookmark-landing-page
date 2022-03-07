import { slideIn } from "./helpers";

const loader = document.querySelector(".loader");
const heroImage = document.querySelector(".hero__image-wrapper");
const logo = document.querySelector(".header__logo-wrapper");
const menuIcon = document.querySelector(".header__hamburger-icon");
const navItems = document.querySelectorAll(".nav__navitem");
const navBtn = document.querySelector(".nav__btn");
const heroTextContent = document.querySelector(".hero__content");
const items = Array.from(navItems);

function onPageLoad(params) {
  // On Page Load
  window.addEventListener("load", () => {
    setTimeout(() => {
      // After load
      loader.style.display = "none";
      // Animate Home Elements
      logo.style.animation = slideIn("slide-in-down", ".4s");
      menuIcon.style.animation = slideIn("slide-in-down", ".4s");
      items.forEach((item, indx) => {
        item.style.animation = slideIn("slide-in-down", `.${indx++ + 4}s`);
      });
      navBtn.style.animation = slideIn("slide-in-down", `1s`);
      heroImage.style.animation = slideIn("slide-in-right", ".45s");
      [...heroTextContent.children].forEach((item, indx) => {
        item.style.animation = slideIn("slide-in-down", `.${indx++ + 5}s`);
      });

      console.log("loaded");
    }, 444);
  });
}
export default onPageLoad;
