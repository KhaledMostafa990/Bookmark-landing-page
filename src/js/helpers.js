function addClassName([...target], className) {
  target.forEach((t) => t.classList.add(className));
}
function removeClassName([...target], className) {
  target.forEach((t) => t.classList.remove(className));
}

export { addClassName, removeClassName };
