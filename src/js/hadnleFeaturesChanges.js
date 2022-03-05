import { addClassName, removeClassName } from "./helpers";
const featuresContentTabs = document.querySelector(".tabs-navigation");

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
function handleFeatureSectionChanges() {
  featuresContentTabs.addEventListener("click", hadnleChangeTab);
}

export default handleFeatureSectionChanges;
