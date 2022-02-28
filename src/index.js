// styles
import "./styles/sass/main.scss";

// Script
const header = document.querySelector(".header");
const logoWrapper = document.querySelector(".header__logo-wrapper");
const openMenuIcon = document.querySelector(".header__hamburger-icon");
const closeMenuIcon = document.querySelector(".header__close-icon");
const nav = document.querySelector(".nav");
const mobileSize = window.matchMedia("(max-width:767px)");

function addClassName(target, className) {
  target.classList.add(className);
}
function removeClassName(target, className) {
  target.classList.remove(className);
}

function enableMenu(mobileSize) {
  if (mobileSize.matches) {
    addClassName(nav, "nav--menu");
    addClassName(openMenuIcon, "active");
  } else {
    removeClassName(nav, "nav--menu");
    removeClassName(openMenuIcon, "active");
  }
}
function handleChangeMenu(event) {
  const open = event.target.closest(".header__hamburger-icon");
  const close = event.target.closest(".header__close-icon");
  if (open) {
    removeClassName(openMenuIcon, "active");
    addClassName(closeMenuIcon, "active");
    addClassName(header, "active");
    addClassName(logoWrapper, "active");
    addClassName(nav, "active");
    console.log(open);
  } else if (close) {
    addClassName(openMenuIcon, "active");
    removeClassName(closeMenuIcon, "active");
    removeClassName(header, "active");
    removeClassName(logoWrapper, "active");
    removeClassName(nav, "active");
    console.log(close);
  }
}

enableMenu(mobileSize);
mobileSize.addEventListener("change", enableMenu);
header.addEventListener("click", handleChangeMenu);
