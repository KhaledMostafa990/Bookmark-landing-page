import { addClassName, removeClassName } from "./helpers";
const accordions = document.querySelector(".fqa__questions");

function hadnleOpenAccordion(event) {
  const targetItem = event.target.closest("h4");
  if (!targetItem) {
    return;
  } else {
    targetItem.classList.toggle("active");
  }
}
function handleAccordionsChnges() {
  accordions.addEventListener("click", hadnleOpenAccordion);
}

export default handleAccordionsChnges;
