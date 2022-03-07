// styles
import "./styles/main.scss";

import handleRenderImages from "./js/renderImages";
import handleFeatureSection from "./js/hadnleFeaturesChanges";
import hadnleHeaderchanges from "./js/handleHeader";
import handleAccordionsChnges from "./js/handleAccordion";
import handleEmailInput from "./js/form";
import onPageLoad from "./js/onPageLoad";
import handleAnimateOnScroll from "./js/animOnScroll";
function init(params) {
  handleRenderImages();
  hadnleHeaderchanges();
  handleFeatureSection();
  handleAccordionsChnges();
  handleEmailInput();
  handleAnimateOnScroll();
}
// Init the page event handlers
init();

// On page Load
onPageLoad();
