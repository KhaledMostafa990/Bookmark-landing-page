import { addClassName, removeClassName } from "./helpers";
const mobileSize = window.matchMedia("(max-width:767px)");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const logoWrapper = document.querySelector(".header__logo-wrapper");
const openMenuIcon = document.querySelector(".header__hamburger-icon");
const closeMenuIcon = document.querySelector(".header__close-icon");
const nav = document.querySelector(".nav");

function enableMenu(mobileSize) {
  if (mobileSize.matches) {
    addClassName([nav], "nav--menu");
    addClassName([openMenuIcon], "active");
  } else {
    removeClassName([nav], "nav--menu");
    removeClassName([openMenuIcon], "active");
  }
}
function handleChangeMenu(event) {
  const open = event.target.closest(".header__hamburger-icon");
  const close = event.target.closest(".header__close-icon");
  if (open) {
    removeClassName([openMenuIcon], "active");
    addClassName([closeMenuIcon, header, logoWrapper, nav, main], "active");
  } else if (close) {
    addClassName([openMenuIcon], "active");
    removeClassName([closeMenuIcon, header, logoWrapper, nav, main], "active");
  }
}

function hadnleHeaderchanges() {
  enableMenu(mobileSize);
  mobileSize.addEventListener("change", enableMenu);
  header.addEventListener("click", handleChangeMenu);
}
export { hadnleHeaderchanges };
