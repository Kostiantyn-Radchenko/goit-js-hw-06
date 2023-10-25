const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
refs.inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  const { currentTarget } = event;
  console.log(refs.inputEl.value);
  refs.textEl.style.fontSize = event.currentTarget.value + "px";
  console.log(refs.textEl.style.fontSize);
}
