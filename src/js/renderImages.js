// // Image
import hero from "../images/illustration-hero.svg";
import features1 from "../images/illustration-features-tab-1.svg";
import features2 from "../images/illustration-features-tab-2.svg";
import features3 from "../images/illustration-features-tab-3.svg";
import downloadC from "../images/logo-chrome.svg";
import downloadF from "../images/logo-firefox.svg";
import downloadO from "../images/logo-opera.svg";
import dotsImg from "../images/bg-dots.svg";

function handleRenderImages() {
  document.querySelector(".hero__image").src = hero;
  document.querySelector(".tabs-content--body__image-1").src = features1;
  document.querySelector(".tabs-content--body__image-2").src = features2;
  document.querySelector(".tabs-content--body__image-3").src = features3;
  document.querySelector(".card__icon--chrome").src = downloadC;
  document.querySelector(".card__icon--firefox").src = downloadF;
  document.querySelector(".card__icon--opera").src = downloadO;
  document
    .querySelectorAll(".card__dots-img")
    .forEach((img) => (img.src = dotsImg));
}
export default handleRenderImages;
