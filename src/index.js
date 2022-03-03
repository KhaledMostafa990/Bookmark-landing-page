// styles
import "./styles/sass/main.scss";
// Image
import hero from "./images/illustration-hero.svg";
import image1 from "./images/illustration-features-tab-1.svg";
import image2 from "./images/illustration-features-tab-2.svg";
import image3 from "./images/illustration-features-tab-3.svg";
const heroImage = document.querySelector(".hero__image");
const featuresImage1 = document.querySelector(".tabs-content--body__image-1");
const featuresImage2 = document.querySelector(".tabs-content--body__image-2");
const featuresImage3 = document.querySelector(".tabs-content--body__image-3");
heroImage.src = hero;
featuresImage1.src = image1;
featuresImage2.src = image2;
featuresImage3.src = image3;
// Script
const mobileSize = window.matchMedia("(max-width:767px)");
const header = document.querySelector(".header");
const logoWrapper = document.querySelector(".header__logo-wrapper");
const openMenuIcon = document.querySelector(".header__hamburger-icon");
const closeMenuIcon = document.querySelector(".header__close-icon");
const nav = document.querySelector(".nav");
const featuresContentTabs = document.querySelector(".tabs-navigation");

function addClassName([...target], className) {
  target.forEach((t) => t.classList.add(className));
}
function removeClassName([...target], className) {
  target.forEach((t) => t.classList.remove(className));
}
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
    addClassName([closeMenuIcon, header, logoWrapper, nav], "active");
  } else if (close) {
    addClassName([openMenuIcon], "active");
    removeClassName([closeMenuIcon, header, logoWrapper, nav], "active");
  }
}
function hadnleChangeTab(event) {
  const targetItem = event.target.closest("li");
  if (!targetItem) {
    return;
  } else {
    // Remove Active
    [...featuresContentTabs.children].map((el) =>
      removeClassName([el], "active")
    );
    document
      .querySelectorAll(".tabs-content--body")
      .forEach((el) => removeClassName([el], "active"));

    const targetContent = document.querySelector(
      `.tabs-content--body--${targetItem.dataset.tab}`
    );
    // Add Active to Target
    addClassName([targetItem], "active");
    addClassName([targetContent], "active");
  }
}

enableMenu(mobileSize);
mobileSize.addEventListener("change", enableMenu);
header.addEventListener("click", handleChangeMenu);
featuresContentTabs.addEventListener("click", hadnleChangeTab);
