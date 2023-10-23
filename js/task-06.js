const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onChangeBorderColor);

function onChangeBorderColor(event) {
  // console.log(event.currentTarget);
  // console.log(event.currentTarget.value.length);
  const dataSetLength = inputEl.dataset.length;
  const inputValueLength = event.currentTarget.value.length;

  if (inputValueLength < dataSetLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
