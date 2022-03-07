import { addClassName, removeClassName, slideIn } from "./helpers";

const headings = document.querySelectorAll(
  "h2 ,h3 ,h4 ,h5, .u-primary-paragraph"
);
const mainPargraphs = document.querySelectorAll(".u-primary-paragraph");
const tabs = document.querySelectorAll(".tabs-navigation__tab");
const featuresImages = document.querySelectorAll(
  ".tabs-content--body__image-wrapper"
);
console.log(featuresImages);
const animationsOnScroll = new IntersectionObserver(
  (entries, animateSectionsOnScroll) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (!entry.isIntersecting) {
        removeClassName([target], "slide-in-up");
        removeClassName([target], "slide-in-down");
        if (target.className === "tabs-navigation__tab") {
          target.style.animation = "unset";
        }
        return;
      } else {
        if (
          target.tagName === "H2" ||
          target.tagName === "H3" ||
          target.tagName === "H4" ||
          target.tagName === "H5" ||
          target.tagName === "P"
          //   target.className === ""
        ) {
          addClassName([target], "slide-in-up");
        } else if (target.className === "tabs-navigation__tab") {
          tabs.forEach((item, indx) => {
            item.style.animation = slideIn("slide-in-up", `.${indx++ + 4}s`);
          });
        } else if (target.className === "tabs-content--body__image-wrapper") {
          featuresImages.forEach((img) => {
            addClassName([img], "slide-in-up");
          });
        }
      }
    });
  },
  {
    // Options
    root: null,
    threshold: 0,
    rootMargin: "-25px",
  }
);
function handleAnimateOnScroll(params) {
  headings.forEach((h) => {
    h.style.opacity = 0;
    animationsOnScroll.observe(h);
  });
  tabs.forEach((tab) => {
    tab.style.opacity = 0;
    animationsOnScroll.observe(tab);
  });
  featuresImages.forEach((img) => {
    img.style.opacity = 0;
    animationsOnScroll.observe(img);
  });
}
export default handleAnimateOnScroll;
