function addClassName([...target], className) {
  target.forEach((t) => t.classList.add(className));
}
function removeClassName([...target], className) {
  target.forEach((t) => t.classList.remove(className));
}
function slideIn(name, duration) {
  return `${name} ${duration} ease-out 1 forwards`;
}

export { addClassName, removeClassName, slideIn };
