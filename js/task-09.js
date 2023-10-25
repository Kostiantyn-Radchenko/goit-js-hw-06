function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  span: document.querySelector(".color"),
  changeColorButton: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.changeColorButton.addEventListener("click", onChangeBgcBody);

function onChangeBgcBody() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.body.style.backgroundColor;
}
