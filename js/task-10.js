function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBox() {
  refs.box.innerHTML = "";
  refs.input.value = "";
}

const refs = {
  buttonCreateEl: document.querySelector("[data-create]"),
  buttonDestroyEl: document.querySelector("[data-destroy]"),
  box: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};

refs.buttonDestroyEl.addEventListener("click", destroyBox);
refs.buttonCreateEl.addEventListener("click", onCreateElements);

function onCreateElements(event) {
  let sizeBox = 30;
  const inputValue = refs.input.value;

  for (let i = 0; i < inputValue; i += 1) {
    const div = document.createElement("div");

    div.style.width = `${sizeBox}px`;
    div.style.height = `${sizeBox}px`;
    div.style.backgroundColor = getRandomHexColor();
    sizeBox += 10;

    refs.box.append(div);
  }
}
